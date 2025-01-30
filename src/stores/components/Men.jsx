import React from 'react'
import { menData } from '../data/men'

function Men() {
    const firstfiveimg = menData.slice(0,5);
    return(
        <>
        <div className="pro-title">
            <h2>Men</h2>
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

export default Men