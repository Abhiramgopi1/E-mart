import React from "react";
import {computerData} from "../data/computers";
import { Link } from "react-router-dom";

function Computers() {
    const firstfiveimg = computerData.slice(0,5);
    return (
        <>
        <div className="pro-title">
            <h2>Computers</h2>
        </div>
        <Link to = "/computers">
        <div className="proSection">
            {
             firstfiveimg.map((item)=>{
              return(
                <div className="imgBox">
                    <img className="proImage" src={item.image} alt="" />
                </div>
              )
           })
        }
        </div>   
        </Link>
        </>
    )
}

export default Computers