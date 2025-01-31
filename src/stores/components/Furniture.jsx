import React from 'react'
import { furnitureData } from '../data/furniture'
import { Link } from 'react-router-dom';

function Furniture() {
    const firstfiveimg = furnitureData.slice(0,5);
    return(
        <>
        <div className="pro-title">
            <h2>Furniture</h2>
        </div>
        <Link to = "/furniture">
        <div className='proSection'>
        {
            firstfiveimg.map((item)=>{
                return(
                    <div className='imgBox'>
                        <img className='proImage' src={item.image} alt="" />
                    </div>
                )
            })
        }
    </div>
        </Link>
    </>
    )
}

export default Furniture