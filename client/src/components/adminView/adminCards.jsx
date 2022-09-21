import React from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

import '../../styles/adminView/adminView.css'

function AdminCards(props){

    const deleteHandler = () => {
        axios.delete(`http://www.localhost:9191/products/${props.product.id}`)
            .then(response => {
                window.location.reload();
            })
            .catch(error => {
                console.log("there was an error posting your content")
            })
    }

    return(
        <table class="inventory-table"> 
            <thead> 
                <tr> 
                    <th>ID</th>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Band</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Manufacturer</th>
                    <th>Serial #</th>
                    <th>Category</th>
                    <th>delete</th>
                </tr> 
            </thead> 
            <tbody> 
            <tr> 
                <td>{props.product.id}</td>
                <td ><Link to={`viewCard/${props.product.id}`}><img style={{maxHeight: '75px', maxWidth: '75px'}}src={props.product.product_image}/></Link></td>
                <td>{props.product.product_name}</td>
                <td>{props.product.product_description}</td>
                <td>{props.product.price}</td>
                <td>{props.product.quantity}</td>
                <td>{props.product.manufacturer}</td>
                <td>{props.product.serial_number}</td>
                <td>{props.product.category}</td>
                <td><button onClick={() => {deleteHandler()}}>Delete</button></td>
            </tr> 
        </tbody> 
    </table> 
    )
}

export default AdminCards

