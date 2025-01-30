
import { fridgeData } from "../data/fridge"
import Navbar from "../components/Navbar"
function FridgePage(){
    return(
        <>
        <Navbar/>
        <div className="page-section">
            {
                fridgeData.map((item)=>{
                    return(
                        <div>
                            <div className="pageimg">
                                <img src={item.image} alt="" />
                            </div>
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