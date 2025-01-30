
import { tvData } from "../data/tv"
import Navbar from "../components/Navbar"
function TVpage(){
    return(
        <>
        <Navbar/>
        <div className="page-section">
            {
                tvData.map((item)=>{
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

export default TVpage