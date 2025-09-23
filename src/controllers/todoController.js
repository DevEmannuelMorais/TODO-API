import { getTodos, createTodo, updateTodoDone, updateTodoTitle, deleteTodo } from "../models/todoModel.js";

export async function listTodos(req, res) {
    const todos = await getTodos();
    res.json(todos);
}

export async function addTodo(req, res) {
    const { title } = req.body;
    if (!title) {
        throw new AppError("Title is required", 400);
    }
    const todo = await createTodo(title);
    res.status(201).json(todo);
}

export async function editTodoTitle(req, res) {
    const { id } = req.params;
    const { title } = req.body;
    if (!title) {
        throw new AppError("Title is required", 400);
    }
    const todo = await updateTodoTitle(id, title);
    res.json(todo);
}

export async function toggleTodoDone(req, res) {
    const { id } = req.params;

    if (!id) {
        throw new AppError("ID is required", 400);
    }

    const { done } = req.body;
    const todo = await updateTodoDone(id, done);
    res.json(todo);
}

export async function removeTodo(req, res) {
    const { id } = req.params;
    if (!id) {
        throw new AppError("ID is required", 400);
    }

    await deleteTodo(id);
    res.status(204).send();
}
