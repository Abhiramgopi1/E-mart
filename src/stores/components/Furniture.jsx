import React from 'react'
import { furnitureData } from '../data/furniture'

function Furniture() {
    const firstfiveimg = furnitureData.slice(0,5);
    return(
        <>
        <div className="pro-title">
            <h2>Furniture</h2>
        </div>
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
    </>
    )
}

export default Furniture