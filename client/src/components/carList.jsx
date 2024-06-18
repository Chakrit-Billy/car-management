import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  TextField,
  Box,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const CarList = ({ cars, onEdit, onDelete }) => {
  const [licensePlateFilter, setLicensePlateFilter] = useState("");
  const [brandFilter, setBrandFilter] = useState("");
  const [modelFilter, setModelFilter] = useState("");

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    if (name === "licensePlateFilter") setLicensePlateFilter(value);
    if (name === "brandFilter") setBrandFilter(value);
    if (name === "modelFilter") setModelFilter(value);
  };

  const filteredCars = cars.filter(
    (car) =>
      car.licensePlate
        .toLowerCase()
        .includes(licensePlateFilter.toLowerCase()) &&
      car.brand.toLowerCase().includes(brandFilter.toLowerCase()) &&
      car.model.toLowerCase().includes(modelFilter.toLowerCase())
  );

  return (
    <>
      <Box
        sx={{
          display: "flex",
          gap: 2,
          marginBottom: 2,
          justifyContent: "center",
          marginTop: "20px",
        }}
      >
        <TextField
          label="Filter by License Plate"
          name="licensePlateFilter"
          value={licensePlateFilter}
          onChange={handleFilterChange}
          variant="outlined"
          size="small"
        />
        <TextField
          label="Filter by Brand"
          name="brandFilter"
          value={brandFilter}
          onChange={handleFilterChange}
          variant="outlined"
          size="small"
        />
        <TextField
          label="Filter by Model"
          name="modelFilter"
          value={modelFilter}
          onChange={handleFilterChange}
          variant="outlined"
          size="small"
        />
      </Box>
      <TableContainer component={Paper}>
        <Table>
          <TableHead sx={{ backgroundColor: "#6200EA" }}>
            <TableRow>
              <TableCell
                sx={{
                  textAlign: "center",
                  color: "#FFFFFF",
                  fontWeight: "bold",
                }}
              >
                License Plate
              </TableCell>
              <TableCell
                sx={{
                  textAlign: "center",
                  color: "#FFFFFF",
                  fontWeight: "bold",
                }}
              >
                Brand
              </TableCell>
              <TableCell
                sx={{
                  textAlign: "center",
                  color: "#FFFFFF",
                  fontWeight: "bold",
                }}
              >
                Model
              </TableCell>
              <TableCell
                sx={{
                  textAlign: "center",
                  color: "#FFFFFF",
                  fontWeight: "bold",
                }}
              >
                Notes
              </TableCell>
              <TableCell
                sx={{
                  textAlign: "center",
                  color: "#FFFFFF",
                  fontWeight: "bold",
                }}
              >
                Actions
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredCars.map((car, index) => (
              <TableRow
                key={index}
                sx={{
                  backgroundColor: index % 2 === 0 ? "#f5f5f5" : "#ffffff",
                  "&:hover": { backgroundColor: "#e0e0e0" },
                }}
              >
                <TableCell sx={{ textAlign: "center" }}>
                  {car.licensePlate}
                </TableCell>
                <TableCell sx={{ textAlign: "center" }}>{car.brand}</TableCell>
                <TableCell sx={{ textAlign: "center" }}>{car.model}</TableCell>
                <TableCell sx={{ textAlign: "center" }}>{car.notes}</TableCell>
                <TableCell
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Button
                    onClick={() => onEdit(car)}
                    startIcon={<EditIcon />}
                    variant="contained"
                    sx={{
                      backgroundColor: "#6200EA",
                      marginRight: "5px",
                      color: "#FFFFFF",
                      "&:hover": {
                        backgroundColor: "#3700B3",
                      },
                    }}
                  >
                    Edit
                  </Button>
                  <Button
                    onClick={() => onDelete(car._id)}
                    startIcon={<DeleteIcon />}
                    variant="contained"
                    sx={{
                      backgroundColor: "#03DAC6",
                      color: "#000000",
                      "&:hover": {
                        backgroundColor: "#018786",
                      },
                    }}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default CarList;
