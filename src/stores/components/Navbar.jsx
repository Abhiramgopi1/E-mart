import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

function Navbar(){
    const {cartItems }= useCart()

    const [showmore,setshowmore] = useState(false);

    return (
        <>
        <div className='navsection'>
            <div className="title"> 
                <h2>E-Mart</h2>
            </div>
            <div class="search-container">
                 <input type="text" placeholder='search..' className='search-input'/>
            </div>
            <div className="user">
                    SignIn/SignUp
            </div>
            <Link to = "/cart" className="custom-link">
                <div className="Cart">
                    Cart 
                    <span>
                        {cartItems.length}
                    </span>
                </div>
            </Link>
        </div>
        <div className="subMenu">
                <ul>
                    <Link to = "/" className='custom-link'><li>Home</li></Link>
                    <Link to = "/mobiles" className="custom-link"><li>Mobiles</li></Link>
                    <Link to = "/Computers" className="custom-link"><li>Computers</li></Link>
                    <Link to = "/Watches" className="custom-link"><li>Watches</li></Link>
                    <Link to = "/TVs" className="custom-link"><li>TV's</li></Link>
                    <Link to = "/acs" className="custom-link"><li>Ac's</li></Link>
                    <Link to = "/fridge" className="custom-link"><li>Fridge</li></Link>
                    <Link to = "/Speaker" className="custom-link"><li>Speaker</li></Link>
                    

                    <li className='more-menu' onMouseEnter={()=> setshowmore(true)} onMouseLeave={()=> setshowmore(false)}>
                    More ▾ 
                        {
                            showmore && (
                                <ul className='dropdown'> 
                                <Link to = "/Menswear" className="custom-link"><li>Mens Wear</li></Link>
                                <Link to = "/Womenswear" className="custom-link"><li>Womens Wear</li></Link>
                                <Link to = "/furniture" className="custom-link"><li>Furniture</li></Link>
                                <Link to = "/kitchen" className="custom-link"><li>Kitchen</li></Link>
                                <Link to = "/books" className="custom-link"><li>Books</li></Link>
                                </ul>
                            )
                        }

                    </li>
                    
                </ul>
            </div>
        </>
    )
}
export default Navbar
