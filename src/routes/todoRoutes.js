import { Router } from "express";
import { listTodos, addTodo, toggleTodo, removeTodo } from "../controllers/todoController.js";

const router = Router();

router.get("/", listTodos);
router.post("/", addTodo);
router.put("/:id", toggleTodo);
router.delete("/:id", removeTodo);

export default router;
