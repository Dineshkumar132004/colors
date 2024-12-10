function Singup(){
    return(
        <>
            <form className="uphead">
              <div className="updiv">
                <h1>Sign Up</h1>
                <input type="text" placeholder="Email"></input><br></br><br></br>
                <input type="text" placeholder="Create password"></input><br></br><br></br>
                <input type="text" placeholder="Confirm password"></input><br></br><br></br>
                <button>Signup</button>
                <p>Already have on account?<a href="#">login</a></p>
             </div>  
                 
            </form>
        </>
    )
}
export default Singup;