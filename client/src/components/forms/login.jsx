import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import '../../styles/forms/login.css'
import axios from 'axios';

function Login(props){
    const [user, setUser] = useState({username: '', password: ''})

    const changeHandler = (e) => {
        e.preventDefault()
        setUser(items => ({
            ...items, 
                [e.target.name]: e.target.value
            }
        ))
    }

    const submitHandler = (e) => {
        e.preventDefault() 

        axios.get("http://www.localhost:9191/users")
            .then( response => {
                response.data.map(item => {
                    if(item.username !== user.username && !item.password !== user.password){
                    document.querySelector('span.error-handler').setAttribute('style', 'display: flex')
                    document.querySelector('span.error-handler').textContent = "Incorrect Information"  
                    } else {
                console.log(response)
                props.setLoggedIn(true)
                setUser({
                    username: '',
                    password: ''
                })
                localStorage.setItem('username', user.username)
                document.querySelector('span.error-handler').setAttribute('style', 'display: none')  
                props.history.push('/')      
                window.location.reload()                              
                }
                })
              
            })
            .catch(error => { 
                console.log('There was an error registering your content')})
    }

    return(
        <section style={{maxWidth: '1300px'}} className='inventory-cards-container'>
            <section className='header header-background'>
                <hr style={{width: '10%', marginRight: "15px"}}/>
                <h1>Vinyl Navigator Members Portal</h1>
                <hr style={{width:"10%", marginLeft: '15px'}}/>
            </section>
            <div className='login-container'>
                <div className='box'>
                    <h1><i className="fas fa-record-vinyl logo"></i>Vinyl Navigator</h1>
                    <form className='login' onSubmit={submitHandler}>
                        <input name='username' 
                               type='text'
                               placeholder='username'
                               value={user.username}
                               onChange={changeHandler}
                               className='email'/>
                        <input name='password' 
                               type='password'
                               placeholder='password'
                               value={user.password}
                               className='email'
                               onChange={changeHandler}/>
                        <button className='btn'type='submit'>Submit</button>
                        <span className='error-handler' ></span>
                    </form>
                    <p style={{width: "100%", display: "flex", justifyContent: "center", color: "black", alignItems: "center"}}>Not a member? &nbsp; &nbsp; <Link to="register" > Register Here</Link></p>
                </div>    
            </div>
        </section>
    )
}

export default Login    





  