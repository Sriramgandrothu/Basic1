import React from 'react';
import axios from 'axios';
import {useState} from 'react';
import {useNavigate} from "react-router-dom";
const Password=()=>{
    const nav=useNavigate();
const [mail,setName]=useState([]);
const [newpassword,setNewPassword]=useState([]);
const Word=async()=>
{
  try
  {
    const isGoal = await axios.post("http://localhost:8000/fp/"+mail+"/"+newpassword);
  if(isGoal.data)
  {
    alert("ok")
      nav('/login');

  }
  else{
    alert("try again")
} }
catch(e)
  {
    console.log(e)
  }
  }
  

return (
    <div className="div4">
     <br/> <div className='div3'>
    
      <h1>Reset password</h1>
      
      
       <p> Username:</p>
       <input type='gmail' placeholder='Enter mail' onChange={(e)=>{setName(e.target.value)}}></input>
       
       <p> Password:</p>
        <input type="password"  placeholder='password' id="newpassword"  name="text" onChange={(e)=>setNewPassword(e.target.value)}/><br/>
       
        <button onClick={Word}>Update</button></div>

          </div>
);
}
export default Password;