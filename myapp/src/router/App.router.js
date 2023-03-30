import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Landingpage from "../components/pages/Landingpage";
import Postupload from "../components/pages/Postupload";
import Postview from "../components/pages/Postview";

// landing page http://localhost:3000/home

  
 export default function Approuter(){
     return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Landingpage />}/>
            <Route path="/viewpost" element={<Postview />}/>
            <Route path="/newpost"  element={<Postupload />}/>

        </Routes>
       </BrowserRouter>
     )
}