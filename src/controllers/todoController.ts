import { Request, Response } from "express";
import Todo from "../models/todoModel.js";

export const createTodo = async (req: Request, res: Response) => {
  const todo = new Todo({
    task: req.body.task,
    ...(req.body.completed && { completed: req.body.completed }),
  });

  try {
    const newTodo = await todo.save();
    res.json(newTodo);
  } catch (error) {
    res.json(error);
  }
};

export const updateTodo = async (req: Request, res: Response) => {
  try {
    const todo = await Todo.findByIdAndUpdate(
      req.params.id,
      {
        ...(req.body.task && {
          task: req.body.task,
        }),
        ...(req.body.completed && {
          completed: req.body.completed,
        }),
      },
      { new: true, runValidators: true },
    );

    console.log("todo", todo);

    if (!todo) return res.status(404).json({ message: "Todo not found" });

    res.json(todo);
  } catch (error) {
    res.json(error);
  }
};

export const getAllTodos = async (req: Request, res: Response) => {
  try {
    const todos = await Todo.find();

    res.json(todos);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getTodo = async (req: Request, res: Response) => {
  try {
    const todo = await Todo.findById(req.params.id);

    if (!todo) {
      return res.status(404).json({ message: "Cannot find todo" });
    }

    res.json(todo);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const deleteTodo = async (req: Request, res: Response) => {
  try {
    const todo = await Todo.findByIdAndDelete(req.params.id);

    if (!todo) {
      return res.status(404).json({ message: "Cannot find todo" });
    }

    res.json({ message: "Todo deleted!" });
  } catch (error) {
    res.status(500).json(error);
  }
};
