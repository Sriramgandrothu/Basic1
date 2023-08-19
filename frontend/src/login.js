import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function Srkr()
{
    const nav=useNavigate();
    
        const Forgot=() =>{
            nav('/fb')
            }
    const Submit=async()=>
    {
        try
        {
            const res=await axios.get("https://server-qemg.onrender.com/login/"+name+"/"+password)
            
                if(res.data)
                {

                    nav('/pb');
                    alert("Success")
                }
                else
                {
                    alert("try again");
                    nav('/signup')
                    
                }
            

        }
        catch(e)
        {
            alert("fill the details");
            nav('/signup')
            console.log(e)
        }
       
    }
    const [name,setname]=useState([]);
    const [password,setps]=useState([]);  
    return(
        <>
        <div className="div4">
            <h1> LOG IN</h1>
        <div className="div5">
        <label>user:<input type="text" onChange={(e)=>setname(e.target.value)}></input></label><br/>
        <label>Password:<input type='password' onChange={(e)=>setps(e.target.value)}/></label><br/>
        <button onClick={Submit}>Submit</button><br/>
        <button onClick={Forgot}>Forgot Password</button><br/>
        </div></div>
        </>
    )
}

export default Srkr;