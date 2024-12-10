import { useEffect, useState } from "react";
import Call_back from "./newpage";
import { useNavigate } from "react-router-dom";

function Women(){

    const store=useNavigate()

    const [data,setdata]=Call_back("https://fakestoreapi.com/products/category/women's clothing")

    // useEffect(()=>{box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    //     fetch("https://fakestoreapi.com/products/category/women's clothing")
    //         .then(res=>res.json())
    //         .then(result=>setdata(result))
    //         .catch((error)=>console.log(error)
    //         )

    // },[])

    const navigate=(id)=>{
        store(`/products/${id}`)
    }

    return(
        <>
            {data ?(
                <div className="womenhead">
                    {data.map((item)=>(
                        <span className="womenspan">
                            <a onClick={()=>navigate(item.id)}>
                            <div className="womenimg">
                                <img src={item.image}></img>

                            </div>
                            <h5>{item.title}</h5>
                            <p>{item.description}</p>
                            <h4>${item.price}</h4>
                            </a>
                        </span>
                    ))}
                </div>
            ):(
                <p>loding....</p>
            )}
        </>
    )

}
export default Women;