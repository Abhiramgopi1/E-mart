import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { booksData } from "../data/books";
import { useCart } from "../context/CartContext";

function Booksingle(){

    const {id} = useParams()

    const {addToCart, cartItems} = useCart();

    const product = booksData.find((item) => item.id === id); 

    return(
        <>
        <div className="ind-page">
            <div className="ind-img">
                <img src={product.image} alt="" />
            </div>

            <div className="ind-details space">
                <div className="ind-company">
                    <h2>{product.title}</h2>
                </div>
                <div className="ind-model space">
                <h3>{product.author}</h3>
                </div>
                <div className="ind-price space">
                    <h2>{product.price}</h2>

                </div>
                <div className="ind-desc space">
                    <p>
                        {product.description} 
                    </p>
                </div>

                <button onClick={()=>addToCart(product)}>Add to Cart</button>
            </div>
            
        </div>
        </>
        
    )
}

export default Booksingle