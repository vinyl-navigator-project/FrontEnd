import React from 'react'
import "../../styles/inventory/interviewFeatureCard.css"

function InterviewFeatureCard(){

    return(
        <div className="interview-feature-container">
            <section className="interview-card-container" 
                 style={{ background: "url('https://storage.cloud.google.com/vinyl_navigator_record_images/vinyl_navigator_logo_with_text.png')", 
                          backgroundRepeat: "no-repeat",
                          backgroundSize: "cover",
                          backgroundPosition: "center"}}>
                <div className="interview-card-text">
                    <p>The Wonderful Sounds Of The Deviants</p>
                </div>
            </section>
            <section className="interview-feature-content">
                <h2>This is the main headline section for the content listed below</h2>
                <p id="publisher-section">Written by: R.L. McLaughlin</p>
                <p style={{fontSize: "0.9rem"}}>This is the content that covers all of the material that's needed to address this subject. It will be extremely informative and convey an important message about the topoic. </p>
                <p className="posted-date">Posted: 11/29/21</p>
            </section>
        </div>
    )
}

export default InterviewFeatureCard;