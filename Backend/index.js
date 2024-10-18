const express = require("express");

const app = express();

app.use(express.json());

app.post("/createTodo",(req,res)=>{
  res.json({
    msg : "Todo list app created"
  })
})

app.get("/todos",(res,res)=>{

})

app.put("/completed",(req,res)=>{
  
})

app.listen(3000);