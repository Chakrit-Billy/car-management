import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import connectDB from "./config/db.js";
import carRoutes from "./routes/carRoutes.js";

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());
connectDB();
// Routes
app.use("/api/cars", carRoutes);
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
