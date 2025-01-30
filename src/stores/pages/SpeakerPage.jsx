
import { speakerData } from "../data/speaker"
import Navbar from "../components/Navbar"
function Speakerpage(){
    return(
        <>
        <Navbar/>
        <div className="page-section">
            {
                speakerData.map((item)=>{
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

export default Speakerpage