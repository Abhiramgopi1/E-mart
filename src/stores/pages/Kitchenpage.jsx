
import { kitchenData } from "../data/kitchen"
import Navbar from "../components/Navbar"
function Kitchenpage(){
    return(
        <>
        <Navbar/>
        <div className="page-section">
            {
                kitchenData.map((item)=>{
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

export default Kitchenpage