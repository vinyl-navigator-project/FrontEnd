import React, { useEffect } from 'react'
import '../../styles/landing/landing.css'
import {Link} from 'react-router-dom'

function OrderConfirmation(props){

    useEffect(() => {
        props.setCart([])
    }, [])

    return(
        <main>
             <h1>Your order has been submitted!</h1>
             <Link style={{width: '100%', textAlign: 'center'}} to='/inventory'>
                 <button>Return</button>
             </Link>
        </main> 
    )
}

export default OrderConfirmation