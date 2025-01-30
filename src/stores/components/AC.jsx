import React from 'react'
import { acData } from '../data/ac'

function AC() {
    const firstfiveimg = acData.slice(0,5);
    return(
        <>
        <div className="pro-title">
            <h2>AC'S</h2>
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

export default AC