import { useEffect, useState } from "react";
import Call_back from "./newpage";
import { useNavigate } from "react-router-dom";

function Mens(){

    const store=useNavigate()

    const [data,setdata]=Call_back("https://fakestoreapi.com/products/category/men's clothing")

    // useEffect(()=>{
    //     fetch("https://fakestoreapi.com/products/category/men's clothing")
    //         .then(res=>res.json())
    //         .then(json=>setdata(json))
    //         .catch((error)=>console.log(error))
    // },[])

    const navigate=(id)=>{
        store(`/products/${id}`)
    }

    return(
        <>
        {data ?(
            <div className="menhead">
                {data.map((item)=>(
                    <span className="menspan">
                        <a onClick={()=>navigate(item.id)}>
                        <div className="menimg">
                            <img src={item.image}></img>
                        </div>
                         <h4>{item.title}</h4>
                         <p>{item.description}</p>
                         <h5>${item.price}</h5>
                         </a>                  
                    </span>
                ))}
            </div>
        ):(
            <p>loding.......</p>
        )}
        </>
    )
}

export default Mens;