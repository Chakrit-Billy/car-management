import mongoose from "mongoose";

const carSchema = new mongoose.Schema({
  licensePlate: { type: String, required: true },
  brand: { type: String, required: true },
  model: { type: String, required: true },
  notes: { type: String },
});

const Car = mongoose.model("Car", carSchema);

export default Car;
