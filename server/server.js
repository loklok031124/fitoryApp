import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";

// Routes Import
import authRoutes from "./routes/authRoutes.js";
import workoutRoutes from "./routes/workoutRoutes.js";
import templateRoutes from "./routes/templateRoutes.js";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(cors());

// Test route
app.get("/", (req, res) => {
  res.send("Fitory backend is running");
});

// Auth routes
app.use("/api/auth", authRoutes);

// Workout routes
app.use("/api/workouts", workoutRoutes);

// Workout Template routes
app.use("/api/templates", templateRoutes);

// User Routes
app.use("/api/users", userRoutes);

//const PORT = process.env.PORT || 5001;
//app.listen(PORT, () => console.log(`🔥 Server running on port ${PORT}`));

// fly deploy
const PORT = process.env.PORT || 8080;
app.listen(PORT, "0.0.0.0", () => console.log(`Server on ${PORT}`));
