import React from 'react'
import { menData } from '../data/men'
import { Link } from 'react-router-dom';

function Men() {
    const firstfiveimg = menData.slice(0,5);
    return(
        <>
        <div className="pro-title">
            <h2>Men</h2>
        </div>
        <Link to = "/Menswear" >
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

export default Men