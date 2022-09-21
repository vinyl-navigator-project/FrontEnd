import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import '../../styles/searchResults.css'

function SearchResults(props){
    const [qty, setQty] = useState(0)

    useEffect(() => {
       return  props.match.map(x => (
            props.inventory.map(y => (
                x.id === y.id ? setQty(y.quantity) : false)
            ))
        )
    }, [])
    
    if(!props.inventory.length){return "gathering data"}
   
    return(
        <section className='shopping-cart-container' style={{ maxWidth: '1300px', justifyContent: 'center'}}>     
            <section className='cart-header cart-header-background' >
                <hr style={{width: '10%', marginRight: "15px"}}/>
                <h1 id='search-header' className='shop'>Vinyl Navigator Search</h1>
                <hr style={{width:"10%", marginLeft: '15px'}}/>
            </section>  
            {props.match.length === 0 ? <h1 style={{paddingTop: '5%'}}>-Enter Your Search Query-</h1>: 
                <div className='search-results'>
                    {props.match.map((item, index) => (
                        <Link style={{textDecoration: 'none', color: "black"}}to={`viewCard/${item.id}`}>
                            <div className='shopping-cart-card'>
                                <div className='cart-left-container search'>
                                    <img className='search-image' src={item.product_image}/>
                                    <section className='search-info'>
                                        <div>
                                            <h4>{item.product_name}</h4>  
                                            <h5>{item.product_description}</h5>
                                            <p className='upc'>UPC:{item.serial_number}</p>
                                        </div>
                                        <div className='button-qty-section'>
                                            <form id='search-qty-section' className='cart-form-container'>
                                                <label for='qty'>Qty:</label>
                                                <input type='number' name='qty' readOnly value={item.quantity}/>    
                                            </form>   
                                            <h5 className='mobile-price'>Price: ${item.price}</h5>                                             
                                        </div>
                                    </section>
                                </div>
                                <div className='price-section'>
                                    <i className="fas fa-record-vinyl vinyl-icon"></i>
                                    <h3 className='price'>Price: ${item.price}</h3>                                             
                                </div>
                            </div> 
                        </Link>    
                    ))}
                </div>
            }
        </section>
    )
}

export default SearchResults