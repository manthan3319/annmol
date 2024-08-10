import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home_Aboutus from "./components/Home_Aboutus/Home_Aboutus";
import Product from "./components/Product/Product";
import Gallery from "./components/Gallery/Gallery";
import Contactus from "./components/Contactus/Contactus";
import Product_View from "./components/Product_View/Product_View";
import { Whatsapp } from "./components/Function/Function";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/aboutus" element={<Home_Aboutus/>} />
        <Route path="/product" element={<Product/>} />
        <Route path="/gallery" element={<Gallery/>} />
        <Route path="/contactus" element={<Contactus/>} />
        <Route path="/product/:id" element={<Product_View />} />
      </Routes>
      <Whatsapp/>
      <Footer/>
    </BrowserRouter>
  );
};

export default App;
