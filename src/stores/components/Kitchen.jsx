import React from 'react'
import { kitchenData } from '../data/kitchen'

function Kitchen() {
    const firstfiveimg = kitchenData.slice(0,5);
    return(
        <>
        <div className="pro-title">
            <h2>Kitchen</h2>
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

export default Kitchen