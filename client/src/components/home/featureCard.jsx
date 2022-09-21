import React from 'react'
import '../../styles/inventory/featureCard.css'


function FeatureCard(props){
    return(
        <section className="feature-card-container" 
                 style={{ background: "url('https://storage.cloud.google.com/vinyl_navigator_record_images/vinyl_navigator_logo_with_text.png?authuser=1')", 
                          backgroundRepeat: "no-repeat",
                          backgroundSize: "cover",
                          backgroundPosition: "center"}}>
            <div className="feature-card-text">
                <p>The Wonderful Sounds Of The Deviants</p>
            </div>
        </section>
    )
}

export default FeatureCard