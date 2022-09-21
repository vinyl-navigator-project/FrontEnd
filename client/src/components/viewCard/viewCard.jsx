import React, {useState, useEffect} from 'react'
import axios from 'axios'
import '../../styles/viewCard/viewCard.css'

function ViewCard(props){
    const [vinyl, setVinyl] = useState([]);
    const[inCart, setInCart] = useState(false)

    useEffect(() => {
        axios.get(`https://vinyl-navigator.herokuapp.com/api/album/${props.match.params.id}`)
            .then(response => {
                setVinyl(response.data)
            })
            .catch(error => {
                console.log("there was an error gathering your data", error); 
            })

        props.cart.map(item => 
            item.id === vinyl.id && item.inCart === true ? setInCart(true) : false
        )
    }, [])


    if(!props || !vinyl[0]){
       return "Currently gathering your album"
    }

    return(
        <section className='inventory-cards-container'>
            <section className='header header-background'>
                <hr style={{width: '10%', marginRight: "15px"}}/>
                <h1>Lollipop Shoppe Vinyl</h1>
                <hr style={{width:"10%", marginLeft: '15px'}}/>
            </section>
            <section className='product-information-container'>
                <div className="media-container">
                <img src={vinyl[0].album_image}/> 
                    <iframe width="250px" 
                            height="250px" 
                            src="https://www.youtube.com/embed/Vd8kid7YRYg" 
                            title="YouTube video player" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen>
                    </iframe> 
                </div>
                <div className='vinyl-product-info'> 
                    <section >
                        <h2>{vinyl[0].band_name}</h2>
                        <h3>{vinyl[0].album_name}</h3>                      
                        <h3>Release Date: {vinyl[0].release_year}</h3>
                        <h5>Band Members: {vinyl[0].band_members}</h5>
                        <h6>Album Tracks: {vinyl[0].album_tracks}</h6>
                        <h6>Buzz Track: {vinyl[0].buzz_track}</h6> 
                        <h6> {vinyl[0].content_1}</h6>
                        <h6>Genre: {vinyl[0].album_genre}</h6>
                        <h6>similar: {vinyl[0].similar}</h6>
                    </section>
                </div>
            </section>         
        </section>
    )
}

export default ViewCard







