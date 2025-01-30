import React from 'react'
import {  watchData } from '../data/watch'

function Watches() {
    const firstfiveimg = watchData.slice(0,5);
    return(
        <>
        <div className="pro-title">
            <h2>Watches</h2>
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

export default Watches