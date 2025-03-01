import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { womanData } from "../data/woman";
import { useCart } from "../context/CartContext";

function Womensingle(){

    const {id} = useParams()

    const {addToCart, cartItems} = useCart();

    const product = womanData.find((item) => item.id === id); 

    return(
        <>
        <div className="ind-page">
            <div className="ind-img">
                <img src={product.image} alt="" />
            </div>

            <div className="ind-details space">
                <div className="ind-company">
                    <h2>{product.company}</h2>
                </div>
                <div className="ind-model space">
                <h3>{product.model}</h3>
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

export default Womensingle