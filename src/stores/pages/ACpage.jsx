
import { acData } from "../data/ac"
import { Link } from "react-router-dom"
function ACpage(){
    return(
        <>
        <div className="page-section">
            {
                acData.map((item)=>{
                    return(
                        <div>
                             <center>
                            <Link to = {`/acs/${item.id}`}>
                            <div className="pageimg">
                                <img src={item.image} alt="" />
                            </div>
                            </Link>
                            <div className="promodel">
                                {item.company}, {item.model}
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

export default ACpage
