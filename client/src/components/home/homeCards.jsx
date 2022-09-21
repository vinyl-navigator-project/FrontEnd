import React from 'react'
import InventoryCard from './inventoryCard'
import FeatureCard from './featureCard'
import HomeCard from './homeCard'
import InterviewFeatureCard from './interviewFeatureCard'
import MenuCardSection from './menuCardSection'
import '../../styles/inventory/inventoryCards.css'

function HomeCards(props){
    let count = 0;
    
    const limitCards = (component) => {
        count += 1
        return component
    }

    return(
        <section className='inventory-cards-container'>
            <section className='header header-background'>
                <hr style={{width: '10%', marginRight: "15px"}}/>
                <h1>Lollipop Shoppe Vinyl</h1>
                <hr style={{width:"10%", marginLeft: '15px'}}/>
            </section>
            <section className='feature-section'>
                <div className="feature-section-container">
                    {props.inventory.map((item, index) => (
                        index === props.inventory.length - 1 ?
                            <FeatureCard item={item} />
                        : " "
                    ))}                    
                </div>
                <div className="block-container">   
                    <div style={{width: "100%", borderBottom: "1px solid rgba(211, 211, 211, 0.74)"}}></div>
                    <div className="block-row-content">
                        <div className="block-row-text">
                            <div>
                                <h2>Spin 6</h2>
                                <p>Fairytale Rock: Explorations of the fantasy side a world without resent and catering</p>
                            </div>
                            <p style={{marginBottom: "0px", fontSize: "0.7rem"}}>Posted: 11/26</p>
                        </div>
                        <img style={{width: "25%", maxHeight: "110px", boxShadow: "1px 3px 5px black"}} src="https://storage.cloud.google.com/vinyl_navigator_record_images/vinyl_navigator_logo_with_text.png" />                       
                    </div>
                    <div style={{width: "100%", borderBottom: "1px solid rgba(211, 211, 211, 0.74)"}}></div>
                    <div className="block-row-content">
                        <div className="block-row-text">
                            <div>
                                <h2>Psychedelic Theater</h2>
                                <p>Feature of the week: The Trip - Starring Peter Fonda, Susan Strassman</p>
                            </div>
                            <p style={{marginBottom: "0px", fontSize: "0.7rem"}}>Posted: 11/26</p>
                        </div>
                        <img style={{width: "25%", maxHeight: "110px", boxShadow: "1px 3px 5px black"}} src="https://storage.cloud.google.com/vinyl_navigator_record_images/vinyl_navigator_logo_with_text.png" />                       
                    </div>
                    <div style={{width: "100%", margin: "0px auto", borderBottom: "1px solid rgba(211, 211, 211, 0.74)"}}></div>
                    <div className="block-row-content">
                        <div className="block-row-text">
                            <div>
                                <h2>Reviews of the turning weather turn into a massive jam festival atleast</h2>
                            </div>
                          <p style={{marginBottom: "0px", fontSize: "0.7rem"}}>Posted: 11/26</p>
                        </div>
                        <img style={{width: "25%", maxHeight: "110px", boxShadow: "1px 3px 5px black"}} src="https://storage.cloud.google.com/vinyl_navigator_record_images/vinyl_navigator_logo_with_text.png" />                       
                    </div>
                    <div style={{width: "100%", borderBottom: "1px solid rgba(211, 211, 211, 0.74)"}}></div>
                </div> 
            </section>
            <hr style={{width: "95%", border: "2px solid black", borderRadius: "20%"}} />      
            <div className='main-section-first-row'>
                <section className='vinyl-cards'>
                    <section className='header header-2'>
                        <hr className='horizontal-rule-1'/>
                        <h2>New Album Reviews</h2>
                        <hr className='horizontal-rule-2'/>
                    </section>  
                    {
                        props.inventory.map((item, index) => (
                            index < 4 ?
                            <HomeCard setCart={props.setCart} 
                                               key={index} 
                                               cartAddHandler={props.cartAddHandler} 
                                               card={item} />
                       : '' )) 
                    }
                    <section className='header header-2'>
                        <hr className='horizontal-rule-1'/>
                        <h2>Interviews</h2>
                        <hr className='horizontal-rule-2'/>
                    </section>  
                    <InterviewFeatureCard />
                    <section className='header header-2'>
                        <hr className='horizontal-rule-1'/>
                        <h2>The Exploratorium</h2>
                        <hr className='horizontal-rule-2'/>
                    </section>  
                    <MenuCardSection/>
                </section>
                <div className="social-media-widgets">
                    <div style={{width: "350px", marginBottom: "10px"}}
                         class="fb-page" 
                         data-href="https://www.facebook.com/vinylnavigator/" 
                         data-tabs="timeline" 
                         data-width="" 
                         data-height="1153px" 
                         data-small-header="false" 
                         data-adapt-container-width="true" 
                         data-hide-cover="false" 
                         data-show-facepile="true">
                        <blockquote cite="https://www.facebook.com/vinylnavigator/" 
                                    class="fb-xfbml-parse-ignore">
                            <a href="https://www.facebook.com/vinylnavigator/">Vinyl Navigator</a>
                        </blockquote>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeCards