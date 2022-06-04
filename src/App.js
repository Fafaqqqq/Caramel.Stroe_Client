import {Route, Routes, BrowserRouter as Router} from "react-router-dom";

import './App.css';
import Header from "./components/header/Header";
import MainImages from "./components/main_images/MainImages";
import OurShop from "./components/our_shop/OurShop";
import Footer from "./components/footer/Footer";
import Catalog from "./components/catalog/Catalog";
import Products from "./Products";
import Auth from './components/auth/Auth'
import Login from "./components/login/Login";
import Register from "./components/register/Register";

function App() {
  return (
    <div className="App">
        <Header/>
        <Routes>
            <Route path={'/'} element={
                <div>
                    <MainImages/>
                    <OurShop/>
                </div>
            }/>
            
            <Route path={'/our_shop'} element={<div>

            </div>}/>
            <Route path={'/contacts'} element={<div>

            </div>}/>
            <Route path={'/liked'} element={<div>

            </div>}/>
            <Route path={'/basket'} element={<div>

            </div>}/>   
            <Route path={'/login'} element={<div>
                <Auth/>
                <Login/>
            </div>}/>
            
            <Route path={'/register'} element={<div>
                <Auth/>
                <Register/>
            </div>}/>

            <Route path={'/shop'} element={<div>
                <Catalog/>
                <Products type="all"/>
            </div>}/>

            <Route path="/shop/skirts" element={<div>
                <Catalog/>
                <Products type="skirts"/>
            </div>}/>
            <Route path="/shop/dresses" element={<div>
                <Catalog/>
                <Products type="dresses"/>
            </div>}/>
            <Route path="/shop/pants" element={<div>
                <Catalog/>
                <Products type="pants"/>
            </div>}/>
            <Route path="/shop/shoes" element={<div>
                <Catalog/>
                <Products type="shoes"/>
            </div>}/>
            
            <Route path="/shop/sportswear" element={<div>
                <Catalog/>
                <Products type="sportswear"/>
            </div>}/>
            <Route path="/shop/underwear" element={<div>
                <Catalog/>
                <Products type="underwear"/>
            </div>}/>
            
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
