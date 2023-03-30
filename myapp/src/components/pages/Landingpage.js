import React from "react";
import { Link } from "react-router-dom";
import Image from "../../images/main.png";
import "../style/Landingpage.css";



export default function Landingpage(){
    return(
        <div className="landing-container">
            <div className="img-container">
                <img src={Image} alt="main-image" />
            </div>
            <div className="text-container">
                <div className="text-child">
                <h1>10x Team 04</h1>
                  <div className="btn-container"> 
                     <Link to="/viewpost"><button className="btn">Enter</button></Link>

                  </div>
                </div>
                
            </div>

        </div>

    )
}
