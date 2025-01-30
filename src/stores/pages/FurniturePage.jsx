
import {    furnitureData } from "../data/furniture"
import Navbar from "../components/Navbar"
function Furniturepage(){
    return(
        <>
        <Navbar/>
        <div className="page-section">
            {
                furnitureData.map((item)=>{
                    return(
                        <div>
                            <div className="pageimg">
                                <img src={item.image} alt="" />
                            </div>
                            <div className="promodel">
                                {item.company}, {item.model}
                            </div>
                        </div>
                    )
                })
            }
        </div>
        </>

    )
}

export default Furniturepage