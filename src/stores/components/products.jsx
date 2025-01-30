import React from 'react'
import Mobiles from './Mobiles'
import Computers from './computers'
import Watches from './watches'
import Men from './Men'
import Women from './Women'
import Furniture from './Furniture'
import Kitchen from './Kitchen'
import AC from './AC'

function products(){
    return (
        <div className='product-section'>
            <Mobiles/>
            <Computers/>
            <Watches/>
            <Men/>
            <Women/>
            <Furniture/>
            <Kitchen/>
            <AC/>
        </div>
    )
}
export default products