import React, { useState, useEffect } from "react";
import { TextField, Button, Box } from "@mui/material";

const CarForm = ({ carToEdit, onSave }) => {
  const [car, setCar] = useState({
    licensePlate: "",
    brand: "",
    model: "",
    notes: "",
  });

  useEffect(() => {
    if (carToEdit) {
      setCar(carToEdit);
    }
  }, [carToEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCar((prevCar) => ({
      ...prevCar,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(car);
    setCar({
      licensePlate: "",
      brand: "",
      model: "",
      notes: "",
    });
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      <TextField
        label="License Plate"
        name="licensePlate"
        value={car.licensePlate}
        onChange={handleChange}
        required
      />
      <TextField
        label="Brand"
        name="brand"
        value={car.brand}
        onChange={handleChange}
        required
      />
      <TextField
        label="Model"
        name="model"
        value={car.model}
        onChange={handleChange}
        required
      />
      <TextField
        label="Notes"
        name="notes"
        value={car.notes}
        onChange={handleChange}
        multiline
        rows={4}
      />
      <Button type="submit" variant="contained" sx={{ background: "#6200EA" }}>
        Save Car
      </Button>
    </Box>
  );
};

export default CarForm;
