import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import '../../styles/forms/login.css'
import axios from 'axios';

function PostProduct(props){
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
            name: product.name,
            product_description: product.product_description,
            serial_number: Number(product.serial_number),
            manufacturer: product.manufacturer,
            category: product.category,
            quantity: Number(product.quantity),
            product_image: product.product_image,
            price: Number(product.price)

        }

        axios.post("http://www.localhost:9191/products", newPost)
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
                               value={product.name}
                               onChange={changeHandler}
                               className='email'/>
                        <input name='product_description' 
                               type='text'
                               placeholder='product_description'
                               value={product.product_description}
                               className='email'
                               onChange={changeHandler}/>
                        <input name='serial_number' 
                               type='text'
                               placeholder='serial_number'
                               value={product.serial_number}
                               className='email'
                               onChange={changeHandler}/>
                        <input name='manufacturer' 
                               type='text'
                               placeholder='manufacturer'
                               value={product.manufacturer}
                               className='email'
                               onChange={changeHandler}/>
                        <input name='category' 
                               type='text'
                               placeholder='category'
                               value={product.category}
                               className='email'
                               onChange={changeHandler}/>
                        <input name='quantity' 
                               type='text'
                               placeholder='quantity'
                               value={product.quantity}
                               className='email'
                               onChange={changeHandler}/>
                        <input name='product_image' 
                               type='text'
                               placeholder='product_image'
                               value={product.product_image}
                               className='email'
                               onChange={changeHandler}/>
                        <input name='price' 
                               type='text'
                               placeholder='price'
                               value={product.price}
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

export default PostProduct    
