import { useEffect, useState } from "react";

import Call_back from "./newpage";

import { useNavigate } from "react-router-dom";

function Jewelery(){

    const store=useNavigate()

    const [data]=Call_back('https://fakestoreapi.com/products/category/jewelery')

    // useEffect(()=>{
    //     fetch('https://fakestoreapi.com/products/category/jewelery')
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
                    <div className="jew1">                    
                        {data.map((value)=>(
                            <span className="jewspan">
                            <a onClick={()=>navigate(value.id)}>
                                <div className="jewimgdiv">
                                   <img  id="jewimg"  src={value.image}></img>

                                </div>                                
                               <h5>{value.title}</h5>
                               <p id="jewp">{value.description}</p>
                               <h1>${value.price}</h1>
                            </a>
                                </span>
                        
                        ))}
                    </div>
                
            ):(
                <p>lode</p>
            )}
            </>
        )
}
export default Jewelery;