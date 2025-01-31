import React from 'react'
import { womanData } from '../data/woman'
import {Link} from 'react-router-dom'

function Women() {
    const firstfiveimg = womanData.slice(0,5);
    return(
        <>
        <div className="pro-title">
            <h2>Women</h2>
        </div>
        <Link to = "/Womenswear">
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

export default Women