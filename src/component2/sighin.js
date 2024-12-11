function Signin(){
    const callme=()=>{
        alert("Welcome To Colors")
    }
    return(
        <>
            <form className="inform">
                <div className="indiv">
                    <h2>Sign in</h2>
                    <input type="text" placeholder="Email or Name"></input><br></br>
                    <input type="password" placeholder="Password"></input>
                    <a href="#"><p>forget password?</p></a>
                    <button onClick={callme}>Sing in</button>
                    

                </div>
            </form>
        </>
    )
}

export default Signin;