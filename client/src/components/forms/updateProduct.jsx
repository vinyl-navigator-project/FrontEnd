import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import '../../styles/forms/login.css'
import axios from 'axios';

function UpdateProduct(props){
    const [product, setProducts] = useState({name: '', product_description: '', serial_number: "", manufacturer: "", category: "", quantity: "", product_image: "", price: ""})

    const changeHandler = (e) => {
        e.preventDefault()
        setProducts(items => ({
            ...items, 
                [e.target.name]: e.target.value
            }
        ))
    }

    const submitHandler = (e) => {
        e.preventDefault() 

        const newPost = {
            name: props.item.name,
            product_description: props.item.product_description,
            serial_number: Number(props.item.serial_number),
            manufacturer: props.item.manufacturer,
            category: props.item.category,
            quantity: Number(props.item.quantity),
            product_image: props.item.product_image,
            price: Number(props.item.price)

        }

        axios.put(`http://www.localhost:9191/products/${id}`, newPost)
            .then( response => {
                if(response.data === "FAILURE"){
                    document.querySelector('span.error-handler').setAttribute('style', 'display: flex')
                    document.querySelector('span.error-handler').textContent = "Incorrect Information"                    
                } else {
                console.log(response)

                setProducts({
                    name: '',
                    product_description: '',
                    serial_number: '',
                    manufacturer: '',
                    category: '',
                    quantity: '',
                    product_image: '',
                    price: ''
                })
                document.querySelector('span.error-handler').setAttribute('style', 'display: none')                                   
                }
            })
            .catch(error => { 
                console.log('There was an error registering your content')})
    }

    return(
        <section style={{maxWidth: '1300px'}} className='inventory-cards-container'>
            <section className='header header-background'>
                <hr style={{width: '10%', marginRight: "15px"}}/>
                <h1>Admin Panel: Post A Record</h1>
                <hr style={{width:"10%", marginLeft: '15px'}}/>
            </section>
            <div  className='login-container'>
                <div style={{width: "400px"}} className='box'>
                    <h1><i className="fas fa-record-vinyl logo"></i>Vinyl Navigator</h1>
                    <form className='login' onSubmit={submitHandler}>
                        <input name='name' 
                               type='text'
                               placeholder='name'
                               value={props.item.name}
                               onChange={changeHandler}
                               className='email'/>
                        <input name='product_description' 
                               type='text'
                               placeholder='product_description'
                               value={props.item.product_description}
                               className='email'
                               onChange={changeHandler}/>
                        <input name='serial_number' 
                               type='text'
                               placeholder='serial_number'
                               value={props.item.serial_number}
                               className='email'
                               onChange={changeHandler}/>
                        <input name='manufacturer' 
                               type='text'
                               placeholder='manufacturer'
                               value={product.item.manufacturer}
                               className='email'
                               onChange={changeHandler}/>
                        <input name='category' 
                               type='text'
                               placeholder='category'
                               value={product.item.category}
                               className='email'
                               onChange={changeHandler}/>
                        <input name='quantity' 
                               type='text'
                               placeholder='quantity'
                               value={product.item.quantity}
                               className='email'
                               onChange={changeHandler}/>
                        <input name='product_image' 
                               type='text'
                               placeholder='product_image'
                               value={product.item.product_image}
                               className='email'
                               onChange={changeHandler}/>
                        <input name='price' 
                               type='text'
                               placeholder='price'
                               value={product.item.price}
                               className='email'
                               onChange={changeHandler}/>
                               <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center"}}><button style={{marginLeft: "0px"}} className='btn'type='submit'>Submit</button></div>
                        
                        <span className='error-handler' ></span>
                    </form>
                </div>    
            </div>
        </section>
    )
}

export default UpdateProduct   