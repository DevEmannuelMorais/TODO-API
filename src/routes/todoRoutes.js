import { Router } from "express";
import { listTodos, addTodo, toggleTodoDone, editTodoTitle, removeTodo } from "../controllers/todoController.js";

const router = Router();

router.get("/", listTodos);
router.post("/", addTodo);
router.put("/:id", editTodoTitle);
router.patch("/:id", toggleTodoDone);
router.delete("/:id", removeTodo);

export default router;
