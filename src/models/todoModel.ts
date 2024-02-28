import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
  task: { type: String, required: true },
  completed: { type: String, default: false },
});

const Todo = mongoose.model("todos", todoSchema);

export default Todo;
