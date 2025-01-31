
import {    furnitureData } from "../data/furniture"
import { Link } from "react-router-dom"

function Furniturepage(){
    return(
        <>
        <div className="page-section">
            {
                furnitureData.map((item)=>{
                    return(
                        <div>
                            <Link to = {`/furniture/${item.id}`}>
                            <div className="pageimg">
                                <img src={item.image} alt="" />
                            </div>
                            </Link>
                            <div className="promodel">
                                {item.brand}, {item.model}
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