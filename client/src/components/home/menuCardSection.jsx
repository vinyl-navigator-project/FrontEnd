import React from 'react'
import "../../styles/inventory/menuCardSection.css"

function MenuCardSection(){

    return(
        <div className="menu-card-container">
            <section className="menu-card-image-container" 
                 style={{ background: "url('https://storage.cloud.google.com/vinyl_navigator_record_images/vinyl_navigator_logo_with_text.png')", 
                          backgroundRepeat: "no-repeat",
                          backgroundSize: "cover",
                          backgroundPosition: "center"}}>
                <div className="menu-card-text">
                    <p>The Wonderful Sounds Of The Deviants</p>
                </div>
            </section>
            <section className="menu-card-image-container" 
                 style={{ background: "url('https://storage.cloud.google.com/vinyl_navigator_record_images/vinyl_navigator_logo_with_text.png')", 
                          backgroundRepeat: "no-repeat",
                          backgroundSize: "cover",
                          backgroundPosition: "center"}}>
                <div className="menu-card-text">
                    <p>The Wonderful Sounds Of The Deviants</p>
                </div>
            </section>
            <section className="menu-card-image-container" 
                 style={{ background: "url('https://storage.cloud.google.com/vinyl_navigator_record_images/vinyl_navigator_logo_with_text.png')", 
                          backgroundRepeat: "no-repeat",
                          backgroundSize: "cover",
                          backgroundPosition: "center"}}>
                <div className="menu-card-text">
                    <p>The Wonderful Sounds Of The Deviants</p>
                </div>
            </section>

        </div>
    )
}

export default MenuCardSection;