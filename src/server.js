import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import todoRoutes from "./routes/todoRoutes.js";
import { errorHandler } from "./middlewares/errorHandler.js";

dotenv.config();

const app = express();

const allowedOrigins = [
  "http://localhost:5173",       // frontend web
  "http://192.168.0.100:5173",   // frontend acessando via IP
  "http://localhost:19006",      // Expo web
  "exp://192.168.0.100:19000",
  "http://localhost:8081"   // Expo Go no celular
];

app.use(cors({
  origin: allowedOrigins
}));

app.use(express.json());

app.use("/todos", todoRoutes);

// Middleware de erro
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, "0.0.0.0", () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});