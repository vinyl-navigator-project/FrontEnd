import React, {useState} from 'react'
import {NavLink} from 'react-router-dom'
import '../../styles/nav/nav.css'


function Nav(props){
    const [search, setSearch] = useState('')
    
    const searchHandler = (e) => {
        e.preventDefault()
        let queryFilter = props.inventory.filter(item => 
            item.product_name.toLowerCase() === search.toLowerCase() 
                || item.product_description.toLowerCase() === search.toLowerCase() 
                || item.serial_number === Number(search)
                || item.manufacturer.toLowerCase() === search.toLowerCase()
                || item.category.toLowerCase() === search.toLowerCase()
                || item.price === Number(search)
        )
        props.setMatch(queryFilter)
        setSearch('')
    }


    return(
        <nav>
            <section>
                <i className="fas fa-record-vinyl vinyl-icon"></i>
                <NavLink style={{textDecoration: 'none', color: 'black'}} to='/'><h2>Vinyl Navigator</h2></NavLink>
            </section>
            <ul className='navbar-items'>                
                <li>
                    <div className='search-container'>
                        <form onSubmit={searchHandler} autocomplete="off">
                            <NavLink to='/searchResults'>
                                <input type='text' 
                                       name='searchBar'
                                       placeholder='Explore Our Database' 
                                       value={search} 
                                       onChange={(e) => {setSearch(e.target.value)}}/>
                            </NavLink> 
                            <button type='submit'><i className="fas fa-search search-icon"></i></button>
                        </form>
                    </div>
                </li>
                <NavLink to='/inventory' style={{textDecoration: "none"}}><li>Shop</li></NavLink>
                <NavLink to='/vinyl' style={{textDecoration: "none"}}><li>Vinyl</li></NavLink>
                <NavLink to='/cart' style={{textDecoration: "none"}}>
                    <li>
                        <i style={{marginLeft: '5px'}} class="fas fa-shopping-cart cart-icon"></i>
                    </li>      
                </NavLink>
                {localStorage.getItem('username', '@admin') ? 
                    <NavLink to='/signOut' style={{textDecoration: "none"}}>
                        <li>
                            <i style={{marginLeft: '5px'}} class="fas fa-user" ></i>
                        </li>      
                    </NavLink> 
                    :
                    <NavLink to='/login' style={{textDecoration: "none"}}>
                        <li>
                            <i style={{marginLeft: '5px'}} class="fas fa-user" ></i>
                        </li>      
                    </NavLink> 
                }
                {
                    !localStorage.getItem('username', '@admin') ? '' 
                    : 
                    <NavLink to='/adminView' style={{textDecoration: "none"}}>
                        <li>
                            <i style={{marginLeft: '5px'}}class="fas fa-crown"></i>     
                        </li>      
                    </NavLink>
                }
            </ul>   
        </nav>        
    )
}

export default Nav