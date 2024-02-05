
const express = require("express");

const Users = require("./MOCK_DATA.json");

const app = express();

const Port = 8000;

app.get("/Users",(req,res)=>{
    const html = `
     <ul>
         ${Users.map((Users) =>`<li>${Users.first_name}</li>`).join("")}
     </ul>
    
    `;
    res.send(html);
})

app.get("/api/Users",(req,res)=>{
    return res.json(Users);
})

app
    
    .get("/api/Users/:id",(req,res)=>{
    const id =  Number(req.params.id);
    const user = Users.find((user) => user.id === id);
    return res.json(user);
})

.patch((req,res) => {
    return res.json({status:"Pending"});
})

.delete((req,res) => {
    return res.json({status:"pending"})
})

app.post((req,res) =>{
    return res.json({status:"pending"})
})


app.listen(Port,() => console.log(`Server has Started in This Platform:${Port}`))