import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Product from "./Product";
import Contact from "./Contact";
import Singleproduct from "./Singleproduct";

import Header from "./component/Header";
import Footer from "./Footer";
import { createContext, useLayoutEffect, useState } from "react";
import { useEffect } from "react";
import axios, { Axios } from "axios";
import { useReducer } from "react";
import MyCart from "./Cart";


function App() {

 

  

    
 

  return (
    <div style={{ color: "#149eca" }}>
     
        <BrowserRouter>
          <Header />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/product" element={<Product />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/singleproduct/:id" element={<Singleproduct />} />
         <Route path="/cart" element={<MyCart/>}/>
          </Routes>
        </BrowserRouter>
        <Footer />
  
    </div>
  );
}

export default App;
