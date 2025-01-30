import React from 'react'
import { mobileData } from '../data/mobiles'

function Mobiles() {
    const firstfiveimg = mobileData.slice(0,5);
    return(
        <>
        <div className="pro-title">
            <h2>Mobiles</h2>
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

export default Mobiles