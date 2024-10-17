const express = require("express");

const app = express();

app.get("/",(req,res)=>{
  res.json({
    msg : "Todo list app created"
  })
})

app.listen(3000);