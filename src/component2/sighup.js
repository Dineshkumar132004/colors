function Singup(){

    const callback=()=>{
        alert("Welcome To Colors")
    }

    return(
        <>
            <form className="uphead">
              <div className="updiv">
                <h1>Sign Up</h1>
                <input type="text" placeholder="Email"></input><br></br><br></br>
                <input type="text" placeholder="Create password"></input><br></br><br></br>
                <input type="text" placeholder="Confirm password"></input><br></br><br></br>
                <button onClick={callback}>Signup</button>
                <p>Already have on account?<a href="#">login</a></p>
             </div>  
                 
            </form>
        </>
    )
}
export default Singup;