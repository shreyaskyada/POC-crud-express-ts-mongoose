import express from "express";
import mongoose from "mongoose";
import { MONGODB_URL } from "./constants.js";
import todoRoutes from "./routes/todoRoutes.js";

const app = express();
app.use(express.json());

mongoose.connect(MONGODB_URL);

// const todoSchema = new mongoose.Schema({
//   task: String,
//   completed: Boolean,
// });

// const Todo = mongoose.model("todos", todoSchema);

// app.post("/todos", async (req, res) => {
//   const todo = new Todo({
//     task: req.body.task,
//     completed: req.body.completed || false,
//   });

//   try {
//     const newTodo = await todo.save();
//     res.status(201).json(newTodo);
//   } catch (error) {
//     res.status(400).json({ message: "Something went wrong" });
//   }
// });

app.use("/todos", todoRoutes);

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
