import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import {FaUser} from 'react-icons/fa';


function Navbar() {
    const { cartItems } = useCart();
    const [showMore, setShowMore] = useState(false);

    return (
        <>
            <div className="navsection">
                <div className="title">
                    <h2>E-Mart</h2>
                </div>
                <div className="search-container">
                    <input type="text" placeholder="Search..." className="search-input" />
                </div>
                <div className="user">
                    <FaUser/>
                    Login
                </div>
                <Link to="/cart" className="custom-link">
                    <div className="Cart">
                        Cart <span>{cartItems.length}</span>
                    </div>
                </Link>
            </div>

            {/* Submenu with horizontal scrolling on mobile */}
            <div className="subMenu">
                <ul>
                    <Link to="/" className="custom-link"><li>Home</li></Link>
                    <Link to="/mobiles" className="custom-link"><li>Mobiles</li></Link>
                    <Link to="/computers" className="custom-link"><li>Computers</li></Link>
                    <Link to="/watches" className="custom-link"><li>Watches</li></Link>
                    <Link to="/tvs" className="custom-link"><li>TVs</li></Link>
                    <Link to="/acs" className="custom-link"><li>ACs</li></Link>
                    <Link to="/fridge" className="custom-link"><li>Fridge</li></Link>
                    <Link to="/speaker" className="custom-link"><li>Speaker</li></Link>

                    {/* Dropdown for More */}
                    <li className="more-menu" onClick={() => setShowMore(!showMore)}>
                        More ▾
                        {showMore && (
                            <ul className="dropdown">
                                <Link to="/menswear" className="custom-link"><li>Menswear</li></Link>
                                <Link to="/womenswear" className="custom-link"><li>Womenswear</li></Link>
                                <Link to="/furniture" className="custom-link"><li>Furniture</li></Link>
                                <Link to="/kitchen" className="custom-link"><li>Kitchen</li></Link>
                                <Link to="/books" className="custom-link"><li>Books</li></Link>
                            </ul>
                        )}
                    </li>
                </ul>
            </div>
        </>
    );
}

export default Navbar;
