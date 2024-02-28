import express from "express";
import {
  createTodo,
  deleteTodo,
  getAllTodos,
  getTodo,
  updateTodo,
} from "../controllers/todoController.js";

const todoRoutes = express.Router();

// Getting all
todoRoutes.get("/", getAllTodos);

// Getting One
todoRoutes.get("/:id", getTodo);

// Creating one
todoRoutes.post("/", createTodo);

// Updating One
todoRoutes.patch("/:id", updateTodo);

// Deleting One
todoRoutes.delete("/:id", deleteTodo);

export default todoRoutes;
