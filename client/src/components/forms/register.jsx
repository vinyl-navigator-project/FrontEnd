import React, {useState} from 'react'
import axios from 'axios'
import '../../styles/forms/login.css'

function Register(props){
    const [user, setUser] = useState({username: '', password: ''})

    const changeHandler = (e) => {
        e.preventDefault()
        setUser(items => ({
            ...items, 
                [e.target.name]: e.target.value
            }
        ))
    }

    const submitHandler = (event) => {
        event.preventDefault() 
        console.log(user)

        const newPost = {
            username: user.username,
            password: user.password
        }

        axios.post("http://www.localhost:9191/users/users/register", newPost)
            .then( response => {
                console.log(response)
                setUser({
                    username: '',
                    password: ''
                })
                props.history.push('/login')
            })
            .catch(error => { console.log('There was an error registering your content')})
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
                </div>    
            </div>
        </section>
    )
}

export default Register  