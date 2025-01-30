import React from 'react'
import { womanData } from '../data/woman'

function Women() {
    const firstfiveimg = womanData.slice(0,5);
    return(
        <>
        <div className="pro-title">
            <h2>Women</h2>
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

export default Women