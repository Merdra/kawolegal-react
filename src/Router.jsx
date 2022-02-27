import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import "bootstrap";
import "react-bootstrap";
import Errorpage from "./Pages/Errorpage";
import Index from "./Pages/Index";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Startup from "./Pages/Startup";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/Login" element={<Login />} /> 
          <Route path="/Register" element={<Register />} /> 
          <Route path="/Startup" element={<Startup />} /> 
          <Route path="*" element={<Errorpage />} /> 
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
