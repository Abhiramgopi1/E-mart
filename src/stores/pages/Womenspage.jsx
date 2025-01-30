
import { womanData } from "../data/woman"
import Navbar from "../components/Navbar"
function Womenspage(){
    return(
        <>
        <Navbar/>
        <div className="page-section">
            {
                womanData.map((item)=>{
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

export default Womenspage