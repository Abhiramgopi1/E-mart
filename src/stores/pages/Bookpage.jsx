
import { booksData } from "../data/books"
import Navbar from "../components/Navbar"
function Bookpage(){
    return(
        <>
        <Navbar/>
        <div className="page-section">
            {
                booksData.map((item)=>{
                    return(
                        <div>
                            <div className="pageimg">
                                <img src={item.image} alt="" />
                            </div>
                            <div className="promodel">
                                {item.title}, Written By {item.author}
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