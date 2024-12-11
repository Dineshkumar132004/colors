import { useEffect, useState } from "react";

import Call_back from "./newpage";

import { useNavigate } from "react-router-dom";

function Electronics(){
            
    const store=useNavigate()

    const [data]=Call_back('https://fakestoreapi.com/products/category/electronics');

    // useEffect(()=>{
    //     fetch('https://fakestoreapi.com/products/category/electronics')
    //         .then(res=>res.json())
    //         .then(result=>setdata(result))
    //         .catch((error)=>console.log(error))
    // },[])

    const navigate=(id)=>{
        store(`/products/${id}`)
    }
    
    return(
        <>        
        {data ?(
                <div className="elechead">
                    {data.map((item)=>(
                        <span className="elecspan">
                            <div className="elecimg">
                                <a onClick={()=>navigate(item.id)}>                          
                                <img src={item.image}></img>
                            </a>

                            </div>
                            <h6>{item.title}</h6>
                            <p>{item.description}</p>
                            <h4>${item.price}</h4>
                        </span>
                    ))}
                </div> 
        ):(
            <p>loding...</p>
        )}
        </>

    )
}

export default Electronics;