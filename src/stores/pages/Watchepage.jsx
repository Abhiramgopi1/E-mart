
import { watchData } from "../data/watch"
import { Link } from "react-router-dom"

function Watchepage(){
    return(
        <>
        <div className="page-section">
            {
                watchData.map((item)=>{
                    return(
                        <div>
                            <center>
                            <Link to = {`/Watches/${item.id}`}>
                            <div className="ind-img">
                                    <img src={item.image} alt="" />
                                </div>

                            </Link>
                            <div className="promodel">
                                {item.brand}, {item.model}
                            </div>
                            </center>
                        </div>
                    )
                })
            }
        </div>
        </>

    )
}

export default Watchepage
