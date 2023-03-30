import React from "react";
import { Link } from "react-router-dom";
import circle from "../../images/circle_icon.svg";
import camera from "../../images/camera.png"
import "../style/Header.css";



export default  function Header(){
    return(
        <div className="header-container">
            <img src={circle} alt="logo" className="logo-img"  />
            <span className='insta-text'>InstaClone</span>
           
            <Link to='/newpost'><img  src={camera} alt="camera-logo" className="caemra-img"/></Link>
        </div>
    )
}