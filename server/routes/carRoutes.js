import { Router } from "express";

const carRouter = Router();

carRouter.get("/", (req, res) => {});

carRouter.get("/:id", (req, res) => {
  const carId = req.params.id;
});

carRouter.post("/", (req, res) => {
  const newCar = req.body;
});

carRouter.put("/:id", (req, res) => {
  const carId = req.params.id;
  const updatedCar = req.body;
});

carRouter.delete("/:id", (req, res) => {
  const carId = req.params.id;
});

export default carRouter;
