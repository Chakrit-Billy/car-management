import React, { useState, useEffect } from "react";
import CarForm from "./components/carForm.jsx";
import CarList from "./components/carList.jsx";
import { getCars, addCar, updateCar, deleteCar } from "./api";
import { Container, Typography } from "@mui/material";

const App = () => {
  const [cars, setCars] = useState([]);
  const [carToEdit, setCarToEdit] = useState(null);

  useEffect(() => {
    fetchCars();
  }, []);

  const fetchCars = async () => {
    const response = await getCars();
    setCars(response.data);
  };

  const handleSaveCar = async (car) => {
    if (carToEdit) {
      await updateCar(carToEdit._id, car);
      setCarToEdit(null);
    } else {
      await addCar(car);
    }
    fetchCars();
  };

  const handleEditCar = async (car) => {
    setCarToEdit(car);
  };

  const handleDeleteCar = async (id) => {
    console.log(id);
    await deleteCar(id);
    fetchCars();
  };

  return (
    <Container className="p-4">
      <Typography
        variant="h4"
        component="h1"
        gutterBottom
        sx={{
          background: "linear-gradient(45deg, #9c27b0, #00bcd4)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          textAlign: "center",
          fontWeight: "bold",
          textTransform: "uppercase",
          letterSpacing: 2,
          mt: 4,
          backgroundColor: "#f0f0f0",
          padding: 2,
          borderRadius: 1,
          boxShadow: 3,
        }}
      >
        Car Management
      </Typography>
      <CarForm carToEdit={carToEdit} onSave={handleSaveCar} />
      <CarList cars={cars} onEdit={handleEditCar} onDelete={handleDeleteCar} />
    </Container>
  );
};

export default App;
