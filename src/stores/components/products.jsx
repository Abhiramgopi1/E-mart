import React from 'react'
import Mobiles from './Mobiles'
import Computers from './computers'
import Watches from './watches'
import TV from './Tvs'
import AC from './AC'

function products(){
    return (
        <div className='product-section'>
            <Mobiles/>
            <Computers/>
            <Watches/>
            <TV/>
            <AC/>
        </div>
    )
}
export default products
