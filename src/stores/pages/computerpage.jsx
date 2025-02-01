
import { computerData } from "../data/computers"
import { Link } from "react-router-dom"


function computerpage(){
    return(
        <>
        <div className="page-section">
            {
                computerData.map((item)=>{
                    return(
                        <div>
                            <center>
                            <Link to = {`/computers/${item.id}`}>
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

export default computerpage
