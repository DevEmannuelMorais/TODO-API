import express from "express";
import dotenv from "dotenv";
import todoRoutes from "./routes/todoRoutes.js";
import { errorHandler } from "./middlewares/errorHandler.js";

dotenv.config();

const app = express();

app.use(express.json());

app.use("/todos", todoRoutes);

// Middleware de erro
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});