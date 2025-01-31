const express=require("express");
const cors=require("cors");
const axios=require("axios");
const {client}=require("./client");
const app =  express();
app.use(cors());

app.get("/",async(req,res)=>{
const cachedValue=await client.get("todos");
if(cachedValue){
    return res.status(200).json(cachedValue);
}
const resp=await axios("https://jsonplaceholder.typicode.com/todos/");
await client.set("todos",JSON.stringify(resp.data));
await client.expire("todos",20);
res.status(200).json(resp.data);
})

app.listen(4000,()=>{
console.log("server running on the port 4000!");
})
