import { getTodos, createTodo, updateTodo, deleteTodo } from "../models/todoModel.js";

export async function listTodos(req, res) {
  const todos = await getTodos();
  res.json(todos);
}

export async function addTodo(req, res) {
  const { title } = req.body;
  if (!title) {
    return res.status(400).json({ error: "Title is required" });
  }
  const todo = await createTodo(title);
  res.status(201).json(todo);
}

export async function toggleTodo(req, res) {
  const { id } = req.params;
  const { done } = req.body;
  const todo = await updateTodo(id, done);
  res.json(todo);
}

export async function removeTodo(req, res) {
  const { id } = req.params;
  await deleteTodo(id);
  res.status(204).send();
}
