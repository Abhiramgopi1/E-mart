
import { watchData } from "../data/watch"
import Navbar from "../components/Navbar"
function Watchepage(){
    return(
        <>
        <Navbar/>
        <div className="page-section">
            {
                watchData.map((item)=>{
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

export default Watchepage