import React from "react";
import {useNavigate } from 'react-router-dom';
const Proj=() =>{
    const nav=useNavigate();
     const Login=() =>{
     nav('/login')}
     const Signup=() =>{
        nav('/signup')}
    return(
        <>
        <div className="div1">
        <div className="I"><h1><b>LOGIN PAGE</b></h1></div>
        <div>
        <button className="button" name="button" onClick={Login}>login</button>
        <button className="button" name="button" onClick={Signup}>signup</button>
        </div>
        </div>
        </>
        
    )
}
export default Proj;