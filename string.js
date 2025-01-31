const {client}=require ('./client.js');
const init =async()=>{
const result=await client.get("user:3");
console.log("done get value!",result);
}
init();
