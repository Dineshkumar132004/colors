import Categori from "./cetegori";
import Signin from "./sighin";

function Head(){
    return(
        <div className="head1">
            <div className="head2">
                <a href="/"><h1>COLORS</h1></a>
            </div>
            <div className="head3">
                <input type="text" placeholder="Search"></input>
                <i class="fa-solid fa-magnifying-glass"></i>
            </div>
            <div className="head6" >
                <a href="/sighup"><i  class="fa-solid fa-cart-shopping"></i> </a>          

                <a href="/sighup"><h1>Cart</h1></a>
            </div>

            <div className="sighin">
                <a href="/sighin" className="sighina1">sighin</a>
                <a href="/sighup" className="sighupa2">sighup</a>

            </div>
            


      
        </div>

    )
}
export default Head;