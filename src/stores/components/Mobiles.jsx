import React from 'react'
import { mobileData } from '../data/mobiles'
import { Link } from 'react-router-dom';

function Mobiles() {
    const firstfiveimg = mobileData.slice(0,5);
    return(
        <>
        <div className="pro-title">
            <h2>Mobiles</h2>
        </div>
        <Link to='/mobiles'>
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

export default Mobiles