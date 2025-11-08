const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const TodoModel = require('./models/Todo')
const app = express();

app.use(express.json());
app.use(cors());
mongoose.connect('mongodb://localhost:27017/test')
app.post('/add',(req,res) =>{
  const task = req.body.task;
  TodoModel.create({
    task : task
  }).then(result => res.json(result))
  .cath(err => res.json(err));
})


app.listen(3001,()=>{
  console.log("server is Running!")
})