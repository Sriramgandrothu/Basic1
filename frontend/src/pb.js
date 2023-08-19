import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
export const Pbstatement=()=>
{
    const nav=useNavigate();
    const[about,setabout]=useState([]);
    const[matter,setmatter]=useState([]);
    const submit=async()=>
    {
        try{
            const res=await axios.post("http://localhost:8000/ps/"+about+"/"+matter)
            if(res.data)
            {
                alert('successfully added')
                nav('/Prob')
            }
            else{
                alert('not added')
            }
        }
        catch(e)
        {
            console.log(e)
        }
    }
    return(
        <>
        <div className="div1">
        <div className="div6">
        <label>About:</label>
        <input type="text" name="about" onChange={(e)=>setabout(e.target.value)}></input><br/><br/>
        <label>description:</label>
        <textarea onChange={(e)=>setmatter(e.target.value)}/><br/>
        <button onClick={submit}>submit</button></div></div>
        </>
    )
}