import React, { useEffect, useState } from 'react'
import '../../styles/shoppingCart/shoppingCart.css'
import ShoppingCartInfo from './shoppingCartInfo'
import axios from 'axios'; 

function ShoppingCart(props){
    const [total, setTotal] = useState()

    useEffect(() => {
        let myTotal = 0 
        props.cart.map(item => 
           item.quantity === 0 ? myTotal += 0 : myTotal += item.price
        )
       setTotal(myTotal)
    }, [])

    const handleToken = (token, address) => {

        let orderInfo = {
            total: total,
            email: token.email,
            city: address.shipping_address_city,
            country: address.shipping_address_country,
            country_code: address.shipping_address_country_code,
            shipping_address: address.shipping_address_line1,
            state: address.shipping_address_state,
            zip: address.shipping_address_zip ,
            name: address.shipping_name
        }        

        postOrder(orderInfo)
        console.log({token, address})
        console.log(props.cart)
        props.history.push('/orderConfirmation')
    }

    const postOrder = (order) => {
        axios.post("http://localhost:9191/orders/", order)
            .then(response => {
                
            })
            .catch(error => {
                console.log("Error submitting order", error)
            })
    }

    if(!props.cart.length && !total){
        return <div className='empty-cart'>Your Cart Is Empty</div>}
    if(!total){
        return <div className='empty-cart'>Your Cart Is Empty</div>
    }

    console.log(props.cart)
    return(
        <section className='shopping-cart-container'>     
            <section className='cart-header cart-header-background'>
                <hr style={{width: '10%', marginRight: "15px"}}/>
                <h1 className='shop'>Lollipop Shoppe Checkout</h1>
                <hr style={{width:"10%", marginLeft: '15px'}}/>
            </section>  
            {
                props.cart.map((item, index) => (
                    <ShoppingCartInfo item={item} 
                                      key={index}  
                                      total={total} 
                                      setTotal={setTotal} 
                                      setCart={props.setCart} 
                                      cart={props.cart} 
                                      inventory={props.inventory} 
                                      setInventory={props.setInventory}/> 
                ))
            }
            <section className='total'>
                {!total ? "loading ..." : <h2>Total: ${total.toFixed(2)}</h2>}

            </section>
        </section>
    )
}

export default ShoppingCart








