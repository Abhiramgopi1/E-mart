
import { kitchenData } from "../data/kitchen"
import {Link} from 'react-router-dom';
function Kitchenpage(){
    return(
        <>
        <div className="page-section">
            {
                kitchenData.map((item)=>{
                    return(
                        <div>
                            <Link to = {`/kitchen/${item.id} ` }>
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

export default Kitchenpage