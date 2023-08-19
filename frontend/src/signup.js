import React, {useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
function Signin()
{
    const nav=useNavigate();
    const Submit=async()=>
    {
        
            try{
                
                const res1=await axios.post("http://localhost:8000/signup1/"+name+"/"+mail)
                if (res1.data)
                {
                    alert("already used")
                }
                else{
                if (cpassword===password){
                const res=await axios.post("http://localhost:8000/signup/"+name+"/"+mail+"/"+pnum+"/"+password+"/"+cpassword)
                    if (res.data)
                    {
                        alert("saved");
                        nav('/login')
                    }
                    else {
                        alert("details not found! signup!!");
                    }
                
            }
            else{
                alert("not matched try again!!!");
            }
        }
    }
       
    
            catch(e)
            {
                alert("fill the details")
                console.log(e)
            }
        
        
    }
    
    const[name,setname]=useState([]);
    const[mail,setmail]=useState([]);
    const[pnum,setpnum]=useState([]);
    const[password,setpassword]=useState([]);
    const[cpassword,setcpassword]=useState([]);
    return(
        <>
        
        <div className="div4">
          <h1>Sign in</h1>
        <div className="div5">
        <label>Name:<input type="text" placeholder="name" onChange={(e)=>setname(e.target.value)}></input></label><br/>
        <label>email :<input type="text" placeholder="email "  onChange={(e)=>setmail(e.target.value)}></input></label><br/>
        <label>phoneno :<input type="text" placeholder="phoneno "  onChange={(e)=>setpnum(e.target.value)}></input></label><br/>
        <label>password:<input type='password' placeholder="password" onChange={(e)=>setpassword(e.target.value)}></input></label><br/>
        <label>confirm password:<input type='cpassword' placeholder="cpassword" onChange={(e)=>setcpassword(e.target.value)}></input></label><br/>
        <button  onClick={Submit}>Submit</button><br/>
        </div>
        </div>  
        </>
    )
}
export default Signin;