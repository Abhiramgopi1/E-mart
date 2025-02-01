import React from 'react'
import { tvData } from '../data/tv'
import { Link } from 'react-router-dom';

function Tvs() {
    const firstfiveimg = tvData.slice(0,5);
    return(
        <>
        <div className="pro-title">
            <h2>Smart TV's</h2>
        </div>
        <Link to='/TVs'>
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

export default Tvs