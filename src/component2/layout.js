import { Outlet } from "react-router-dom";
import Head from "./header";
import Categori from "./cetegori";
import Footer from "./footer";

function Layout(){
    return(
        <>
           <header>
               <Head />
            </header>
            {/* <nav>
                <Categori />
            </nav> */}
        <section>
            <Outlet/>
        </section>

        <footer>
            <Footer />
        </footer> 
        </>
    )
}
export default Layout;