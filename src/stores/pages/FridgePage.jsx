
import { Link } from "react-router-dom"
import { fridgeData } from "../data/fridge"

function FridgePage(){
    return(
        <>
        <div className="page-section">
            {
                fridgeData.map((item)=>{
                    return(
                        <div>
                            <Link to={`/fridge/${item.id}`}>
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

export default FridgePage