
import { Link } from "react-router-dom"
import { speakerData } from "../data/speaker"

function Speakerpage(){
    return(
        <>
        <div className="page-section">
            {
                speakerData.map((item)=>{
                    return(
                        <div>
                            <center>
                            <Link to={`/speaker/${item.id}`}>
                            <div className="pageimg">
                                <img src={item.image} alt="" />
                            </div>
                            </Link>
                            <div className="promodel">
                                {item.brand}, {item.model}
                            </div>
                            </center
                        </div>
                    )
                })
            }
        </div>
        </>

    )
}

export default Speakerpage
