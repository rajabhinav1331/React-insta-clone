import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import "../style/Postupload.css";

export default function Postupload(){
    return(
        <>
        <Header />
        <div className="form-container">
        <form >
            
            <div className="file"> <input  id='file-name'type="file" /></div>
            <span className="author"><input type="text"  id='author-name' placeholder="author..."/></span>  <span className="location"><input type="text" id='location-name'  placeholder="location..."/></span>
            
            <div className="description"> <input type="text" id='description-name' placeholder="description..." /></div>
            <div className="btn-container"> <button className="btn-submit">Post</button></div>
           
        </form>
        </div>
     

        </>
    )
}