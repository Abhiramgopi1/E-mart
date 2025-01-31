
import { menData } from "../data/men"
import { Link } from "react-router-dom"
function Menspage(){
    return(
        <>
        <div className="page-section">
            {
                menData.map((item)=>{
                    return(
                        <div>
                            <Link to = {`/Menswear/${item.id}`}>
                            <div className="pageimg">
                                <img src={item.image} alt="" />
                            </div>
                            </Link>
                            
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