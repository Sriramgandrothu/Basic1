import { MongoClient } from "mongodb";
let db; 
async function connectToDB(cb){
    const url = "mongodb+srv://sriramgandrothu:ammanannaakka@sriramgandrothu.p5wfisn.mongodb.net/?retryWrites=true&w=majority";
    const client = new MongoClient(url);
    await client.connect();
    db = client.db("Quntam");
    cb();
}
export { connectToDB, db };