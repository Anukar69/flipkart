import "./App.css";
import Header from "./Components/header/Header";
import Home from "./Components/home/Home";
import Box from "@mui/material/Box";
import { ReactDOM } from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Productmenu from "./Components/deatail/Productmenu"
import Data from "./Components/deatail/Data"
import Login from "./Components/login/Login";
import Singnup from "./Components/login/Singnup"
import Productindividual from "./Components/productdetail/Productrindividual";
import Cartmain from "./Components/cart/Cartmain";
import Adress from "./Components/checkout/Adress";
import Payment from "./Components/checkout/Payment"


function App() {
  return (
    <div>
      {/* <Home /> */}
      
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/> } />
          <Route path="/productdetail" element={<Productmenu/>} />
          <Route path="singnup" element={<Singnup/>}/>
          <Route path="/Productindividual:id" element={<Productindividual/>}/>
          <Route path="/cartmain:id" element={<Cartmain/>}/>
          
          <Route path="/cartmain:id/adress" element={<Adress/>}/>
          <Route path="/payment" element={<Payment/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
