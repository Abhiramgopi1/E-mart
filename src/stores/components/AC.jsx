import React from 'react'
import { acData } from '../data/ac'
import { Link } from 'react-router-dom';

function AC() {
    const firstfiveimg = acData.slice(0,5);
    return(
        <>
        <div className="pro-title">
            <h2>AC'S</h2>
        </div>
        <Link to="/acs">
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

export default AC