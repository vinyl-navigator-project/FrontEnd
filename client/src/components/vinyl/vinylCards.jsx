import React from 'react'
import VinylCard from './vinylCard'
import '../../styles/vinyl/vinylCards.css'


function VinylCards(props){

   // let albumList = props.inventory.filter(item => item.category == 'vinyl')

    return(
        <section className='inventory-cards-container'>
            <section className='header header-background'>
                <hr style={{width: '10%', marginRight: "15px"}}/>
                <h1>Lollipop Shoppe Vinyl</h1>
                <hr style={{width:"10%", marginLeft: '15px'}}/>
            </section>
            <section className='vinyl-cards'>
                {
                    props.inventory.map((item, index) => (
                        <VinylCard key={index} cart={props.cart} inventory={props.inventory} setInventory={props.setInventory} setCart={props.setCart} vinyl={item} />
                    ))
                }
            </section>
        </section>
    )
}

export default VinylCards;