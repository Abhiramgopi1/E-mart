
import { mobileData } from "../data/mobiles"
import { Link } from "react-router-dom"
import { useState } from "react"

function Mobilepage(){

    const [selectedProduct, setselectedProduct] = useState([])

    const companyHandler = (mango) => {
        if(selectedProduct.includes(mango)){
            setselectedProduct(selectedProduct.filter(item => item !== mango))
        }
        else{
            setselectedProduct([...selectedProduct,mango])
        }
    }

    const filteredProduct = selectedProduct.length===0?
        mobileData : mobileData.filter ((orange) => selectedProduct.includes(orange.company))

    return(
        <>

        <div className="full-page">

            {/* <div className="pro-selected">
                {
                    mobileData.map((phone)=>{
                        return(
                            <div className="pro-input">
                                <label>
                                    <input type="checkbox" 
                                    checked = {selectedProduct.includes(phone.company)}
                                    onChange={()=>companyHandler(phone.company)}
                                    />
                                    {phone.company}
                                </label>
                            </div>
                        )
                    })
                }
            </div> */}


            <div className="page-section">
                {
                    filteredProduct.map((item)=>{
                        return(
                            <div>
                                <center>
                                <Link to={`/mobiles/${item.id}`}>
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
        </div>
        </>
    )
}

export default Mobilepage
