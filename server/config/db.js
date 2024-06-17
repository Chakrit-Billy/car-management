import { connect } from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const dbUrl =
  "mongodb+srv://ablchakrit:Cc6jAV94uLiiHYZA@cluster0.of2wcek.mongodb.net";

const connectDB = async () => {
  try {
    await connect(dbUrl);
    console.log("MongoDB connected...");
  } catch (err) {
    console.error("Database connection error:", err);
    process.exit(1); // Exit process with failure
  }
};

export default connectDB;
