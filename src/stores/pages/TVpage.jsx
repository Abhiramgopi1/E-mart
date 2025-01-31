
import { Link } from "react-router-dom"
import { tvData } from "../data/tv"

function TVpage(){
    return(
        <>
        <div className="page-section">
            {
                tvData.map((item)=>{
                    return(
                        <div>
                            <Link to={`/TVs/${item.id}`}>
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

export default TVpage