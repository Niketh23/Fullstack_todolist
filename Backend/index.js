const express = require("express");
const { createTodoSchema, updateTodoSchema } = require("./types");
const Todo = require("./db");

const app = express();

app.use(express.json());

app.post("/createTodo",async(req,res)=>{
  const TodoItems = req.body;

  const ValidateTodo = createTodoSchema.safeParse(TodoItems);

  if(!ValidateTodo.success){
    res.status(411).json({
      msg : "Invalid User Schema"
    })
  }
  await Todo.create({
    title : TodoItems.title,
    description : TodoItems.description,
    MarkasDone : TodoItems.MarkasDone
  })

  res.json({
    msg : "Todo Created"
  })
})

app.get("/todos",async(req,res)=>{
  const alltodos = await Todo.find({});

  res.json({
    AllTodos : alltodos
  })
})

app.put("/completed",async(req,res)=>{
  const updatePayload = req.body;
  const parsedPayload = updateTodoSchema.safeParse(updatePayload);

  if(!parsedPayload.success){
    res.status(411).json({
      msg : "Invalid details to update"
    })
  }

  await Todo.updateOne({
    _id : req.body.id
  },{
    MarkasDone:true
  })

  res.json({
    msg : "Todo marked as completed"
  })

})

app.listen(3000);