import {BrowserRouter,Routes,Route} from "react-router-dom";
import Layout from "./layout";
import Signin from "./sighin";
import Singup from "./sighup";
import Electronic from "./electronics";
import Jewelery from "./jewallery";
import Mens from "./menclothing";
import Women from "./womenclothing";
import Single from "./single";
import Categori from "./cetegori";

function Routeee(){
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout/>}>
                    <Route path="/" element={<Categori />}/>
                    <Route path="/sighin" element={<Signin />}/>
                    <Route path="/sighup" element={<Singup />}/>
                    <Route path="/electronics" element={<Electronic />}/>
                    <Route path="/jewelery" element={<Jewelery />}/>
                    <Route path="/men's clothing" element={<Mens />}/>
                    <Route path="/women's clothing" element={<Women />}/>
                    <Route path="/products/:id" element={<Single/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Routeee;