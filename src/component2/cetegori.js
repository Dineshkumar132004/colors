import { useState,useEffect } from "react";

function Categori(){
    const[data,setData]=useState(null)

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products/categories')
            .then(res=>res.json())
            .then(result=>setData(result))
            .catch(error=>console.log(error))
    },[])
    return(
        <>    
            {data ?(
                <div className="cathead">          
                {data.map((item)=>(
                    <span className="catspan">
                    <a href={item}><span>{item}</span></a>
                    </span>              
                ))}
                </div>   
         ):(
            <a>loding</a>
         )}
        
        </>
      
    )

}

export default Categori;