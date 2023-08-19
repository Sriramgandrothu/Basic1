import {React,  useEffect,  useState } from "react";
import axios from 'axios';

export  const Problem = () => {
    const[x,sx]=useState([]);
    useEffect(()=>
      {
        axios.get("https://server-qemg.onrender.com/pso")
        .then( (result)=>
          {
            sx(result.data);
          })
      })
        return(
            <>
                <div>
                 {
                x.map((data)=>
                (
                    <>
                      <div className="container-1">
                    {data.About}<br/>
                    {data.Matter}
                    </div>
                    </>
                ))
                 }
                </div>
              


               
            </>
        )
}