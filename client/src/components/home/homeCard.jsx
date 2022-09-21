import React from 'react'
import '../../styles/vinyl/vinylCard.css'
import {Link} from 'react-router-dom'

function HomeCard(props){

    return(
        <section className='vinyl-card-container'>
            <Link style={{textDecoration: 'none', color: 'black', display: "flex", flexWrap: "wrap", width: "100%"}} to={`viewCard/${props.card.id}`}>
                <img src={props.card.album_image}/>
                <div className='vinyl-info'>
                    <div>
                        <h1 className='band-info'>{props.card.album_name}</h1>
                        <p className='manufacturer'>{props.card.band_name} </p>                         
                        <p className="published-section">Example text: this is a story about something so incredible that its great to know</p>
                    </div>
                    <div className="card-footer"> 
                        <h4>Written by: R.L. McLaughlin</h4> 
                        <h4>11/25/21</h4>
                    </div>
                </div>           
            </Link>
        </section>
    )
}

export default HomeCard;