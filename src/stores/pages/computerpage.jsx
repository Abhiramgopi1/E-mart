
import { computerData } from "../data/computers"
import Navbar from "../components/Navbar"

function computerpage(){
    return(
        <>
        <Navbar/>
        <div className="page-section">
            {
                computerData.map((item)=>{
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

export default computerpage