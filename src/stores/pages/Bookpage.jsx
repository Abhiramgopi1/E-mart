
import { Link } from "react-router-dom"
import { booksData } from "../data/books"

function Bookpage(){
    return(
        <>
        <div className="page-section">
            {
                booksData.map((item)=>{
                    return(
                        <div>
                            <Link to={`/books/${item.id}`}>
                            <div className="pageimg">
                                <img src={item.image} alt="" />
                            </div>
                            </Link>
                            <div className="promodel">
                                <h4>{item.title}</h4>Written By {item.author}
                            </div>
                        </div>
                    )
                })
            }
        </div>
        </>

    )
}

export default Bookpage