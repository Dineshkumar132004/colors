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
                    <div className="chead">
                    <h1 className="cah1"> WELCOME TO</h1>
                    <h1 className="cah1">COLORS</h1>
                    <h1 className="cah2">BELIEVE AND BE HAPPY</h1>
                    </div>           
                   <div className="catnew">
                   {data.map((item)=>(
                    <span className="catspan">
                    <a href={item}><span>{item}</span></a>
                    </span>              
                ))}   
                    </div>
                </div>   
         ):(
            <a>LODING....</a>
         )}
           <div>
            </div>         
        </>
        
    )

}

export default Categori;