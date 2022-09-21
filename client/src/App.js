import React, {useEffect, useState} from 'react'
import Nav from './components/nav/nav'
import HomeCards from './components/home/homeCards.jsx'
import Login from './components/forms/login'
import Register from './components/forms/register'
import SignOut from './components/forms/signOut'
import Landing from './components/landing/landing'
import postProduct from './components/forms/postItem'
import VinylCards from './components/vinyl/vinylCards'
import ShoppingCart from './components/shoppingCart/shoppingCart'
import SearchResults from './components/searchResults/searchResults'
import {Route} from 'react-router-dom'
import ViewCard from './components/viewCard/viewCard'
import AdminView from './components/adminView/adminView.jsx'
import OrderConfirmation from './components/orderConfirmation/orderConfirmation.jsx'
import axios from 'axios'
import './App.css';

function App() {
    const [cart, setCart] = useState([])
    const [match, setMatch] = useState([])
    const [loggedIn, setLoggedIn] = useState(false)
    const [inventory, setInventory] = useState([])

    useEffect(() => {
        axios.get("https://vinyl-navigator.herokuapp.com/api/album")
          .then(response => {
            setInventory(response.data)
          })
          .catch(error => {
            console.log("There was an error gathering your data", error)
          })
    }, [])

    const getProducts = () => {
      axios.get("https://vinyl-navigator.herokuapp.com/api/album")
      .then(response => {
        setInventory(response.data)
      })
      .catch(error => {
        console.log("There was an error gathering your data", error)
      })    

    }

    console.log(inventory)

  return (
      <div className="App">

          <Nav inventory={inventory} loggedIn={loggedIn} setMatch={setMatch} match={match}/>
    
          <Route exact path='/' render={props => (
            <Landing {...props} />
          )}/>

          <Route path='/searchResults' render={props => (
            <SearchResults {...props} match={match} setMatch={setMatch} inventory={inventory} setInventory={setInventory}/>
          )}/>
          
          <Route path='/inventory' render={props => (
            <HomeCards {...props} setCart={setCart}  inventory={inventory}/>
          )}/>          

          <Route path='/adminView' render={props => (
              <AdminView {...props} inventory={inventory} setInventory={setInventory} getProducts={getProducts}/> 
          )}/>

          <Route path='/vinyl' render={props => (
            <VinylCards {...props} setCart={setCart} cart={cart} setInventory={setInventory} inventory={inventory}/>
          )}/>

          <Route path='/cart' render={props => (
              <ShoppingCart {...props}  cart={cart} setCart={setCart} inventory={inventory} setInventory={setInventory}/>
          )}/>

          <Route path='/viewCard/:id' render={props => (
              <ViewCard {...props} inventory={inventory} setInventory={setInventory} cart={cart} setCart={setCart}/> 
          )}/>

          <Route path='/orderConfirmation' render={props => (
              <OrderConfirmation {...props} setCart={setCart}/> 
          )}/>
          <Route path='/postProduct' component={postProduct}/>  

          <Route path='/register' component={Register}/>   

          <Route path='/login' render={props => (
            <Login {...props} setLoggedIn={setLoggedIn} loggedIn={loggedIn}/>
          )}/>       

          <Route path='/signOut' render={props => (
            <SignOut {...props} />
          )}/>
            <div style={{width: "100%", background:"black", height: "150px", marginBottom: "0px", marginTop: "15px"}}></div>
      </div>
  );
}

export default App;
