import pool from "../config/db.js";

export async function getTodos() {
  const res = await pool.query("SELECT * FROM tasks.todos ORDER BY created_at ASC");
  return res.rows;
}


export async function createTodo(title) {
  const result = await pool.query(
    "INSERT INTO tasks.todos (title) VALUES ($1) RETURNING *",
    [title]
  );
  return result.rows[0];
}


export async function updateTodoTitle(id, title) {
  const result = await pool.query(
    "UPDATE tasks.todos SET title = $1 WHERE id = $2 RETURNING *",
    [title, id]
  );
  return result.rows[0];
}


export async function updateTodoDone(id, done) {
  const result = await pool.query(
    "UPDATE tasks.todos SET done = $1 WHERE id = $2 RETURNING *",
    [done, id]
  );
  return result.rows[0];
}


export async function deleteTodo(id) {
  await pool.query("DELETE FROM tasks.todos WHERE id = $1", [id]);
  return { message: "Todo deleted" };
}