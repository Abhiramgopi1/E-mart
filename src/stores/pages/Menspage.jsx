
import { menData } from "../data/men"
import Navbar from "../components/Navbar"
function Menspage(){
    return(
        <>
        <Navbar/>
        <div className="page-section">
            {
                menData.map((item)=>{
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

export default Menspage