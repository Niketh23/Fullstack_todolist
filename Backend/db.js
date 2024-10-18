const mongoose = require("mongoose");
const dotenv = require('dotenv');

dotenv.config();


mongoose.connect(process.env.URI,{ 
  useNewUrlParser: true, 
  useUnifiedTopology: true
});

const TodoSchema = new mongoose.Schema({
  title : String,
  description : String,
  MarkasDone : Boolean
});

const Todo = mongoose.model('todo',TodoSchema);

module.exports = Todo;