import cors from 'cors';
import express from 'express';
import { connectToDB, db } from './db.js';
const app=express();
app.use(express.json());
app.use(cors());
//check server//
app.get('/',(req,res)=>{
    res.send("server is running")
})
app.post('/ps/:about/:matter',async(req,res)=>
{
    const details=await db.collection('cherry').insertOne({About:req.params.about,Matter:req.params.matter})
    res.json(details);
})
app.get('/pso',async(req,res)=>
{
    const details=await db.collection('cherry').find().toArray();
    res.json(details);
})
app.post('/signup1/:name/:mail',async(req,res)=>
{
    const details=await db.collection('sriram').findOne({Name:req.params.name,Mail:req.params.mail})
    res.json(details);
})
app.post('/fp/:mail/:newpassword',async (req,res)=>{
  
    const details = await db.collection('sriram').findOneAndUpdate({Mail:req.params.mail},{$set:{Password:req.params.newpassword}})
    res.json(details);
})
app.post('/signup/:name/:mail/:pnum/:password/:cpassword',async(req,res)=>
{
    const details=await db.collection('sriram').insertOne({Name:req.params.name,Mail:req.params.mail,Pnum:req.params.pnum,Password:req.params.password,Cpassword:req.params.cpassword})
    res.json(details);
})

app.get('/login/:name/:password',async(req,res)=>
{
    const details=await db.collection('sriram').findOne({Name:req.params.name,Password:req.params.password})
    res.json(details);
})
connectToDB(()=>{
    app.listen(8000,()=>{
        console.log("Server Running At port 8000");
    })
})
// import express from 'express'

// import {db,connectToDB} from "./db.js";

// const app = express()

// app.use(express.json())

// app.get('/',(req,res)=>{
//     res.send("Server running!");
// })


// connectToDB(()=>{
//     app.listen(8000,()=>{
//         console.log("Server Running At port 8000");
//     })
// })