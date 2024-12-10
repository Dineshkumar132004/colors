import { useMatch } from "react-router-dom";
import { useEffect,useState } from "react";

function Single() {
    

    const{
        params:{id},
    }
        =useMatch('/products/:id')

    console.log(id);
    
    
    let link=`https://fakestoreapi.com/products/${id}`

    const [data,setdata]=useState(null)

    useEffect(()=>{ 
        fetch(link)
        .then(res=>res.json())
        .then(result=>setdata(result))
        .catch((error)=>console.log("error")
        )
    },[])

    return(
        < div className="singlehead">
        
            {data ?(
                <div>
                    <span className="singlespan">
                        <div className="singleimg">
                            <img src={data.image}/>
                        </div>
                        <div className="singletitle">
                            <h3>{data.title}</h3>
                            <h1>${data.price}</h1>
                            <p>{data.description}</p>
                             <div className="singlea1">
                                <a href="/sighin">Add to Cart</a>

                            </div>       
                            <div className="singlea2">
                                <a href="/sighup">Buy Now</a>

                            </div>
                        </div>
                
                    </span>
                
                </div>
            ):(
                <p>lode</p>
            )}
        </div>
    )
}

export default Single;