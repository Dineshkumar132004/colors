import { useState,useEffect } from "react";

function Call_back(link) {
    const [data,setdata]=useState(null)

    useEffect(()=>{
        fetch(link)
        .then(res=>res.json())
        .then(data=>setdata(data))
        .catch(error=>console.log(error)
        )
            
    },[])   
    return [data]

}
export default Call_back;