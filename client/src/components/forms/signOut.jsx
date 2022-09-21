import React from 'react' 
import '../../styles/forms/signOut.css'

function SignOut(props){

    const signOutHandler = () => {
        localStorage.removeItem('username')
        localStorage.removeItem('email')
        props.history.push('/')
        window.location.reload()
    }

    return(
        <div className='sign-out-container'>
            Click <span onClick={signOutHandler}>&nbsp;here&nbsp;</span> to sign out. 
        </div>
    )
}

export default SignOut