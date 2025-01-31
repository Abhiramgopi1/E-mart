
import { womanData } from "../data/woman"
import { Link } from 'react-router-dom'
function Womenspage(){
    return(
        <>
        <div className="page-section">
            {
                womanData.map((item)=>{
                    return(
                        <div>
                            <Link to ={`/Womenswear/${item.id}`}>
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

export default Womenspage