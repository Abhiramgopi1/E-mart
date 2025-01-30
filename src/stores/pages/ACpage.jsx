
import { acData } from "../data/ac"
import Navbar from "../components/Navbar"
function ACpage(){
    return(
        <>
        <Navbar/>
        <div className="page-section">
            {
                acData.map((item)=>{
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

export default ACpage