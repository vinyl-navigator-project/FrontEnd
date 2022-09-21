import React from 'react'
import {Link} from 'react-router-dom'
import '../../styles/landing/landing.css'

function Landing(props){
    
    return(
        <main>
             <h1>-Vinyl Navigator-</h1>
             <Link style={{width: '100%', textAlign: 'center'}} to='/inventory'>
                 <button>Enter Here</button>
             </Link>
        </main> 
    )
}

export default Landing