function Signin(){
    return(
        <>
            <form className="inform">
                <div className="indiv">
                    <h2>Sign in</h2>
                    <input type="text" placeholder="Email or Name"></input><br></br>
                    <input type="password" placeholder="new password"></input>
                    <a href="#"><p>forget password?</p></a>
                    <button >Sing in</button>
                    

                </div>
            </form>
        </>
    )
}

export default Signin;