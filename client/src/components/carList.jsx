import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@mui/material";

const CarList = ({ cars, onEdit, onDelete }) => {
  console.log(cars);
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>License Plate</TableCell>
            <TableCell>Brand</TableCell>
            <TableCell>Model</TableCell>
            <TableCell>Notes</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cars.map((car, index) => (
            <TableRow key={index}>
              <TableCell>{car.licensePlate}</TableCell>
              <TableCell>{car.brand}</TableCell>
              <TableCell>{car.model}</TableCell>
              <TableCell>{car.notes}</TableCell>
              <TableCell>
                <Button
                  onClick={() => onEdit(car)}
                  variant="contained"
                  color="primary"
                  sx={{ marginRight: 1 }}
                >
                  Edit
                </Button>
                <Button
                  onClick={() => onDelete(car._id)}
                  variant="contained"
                  color="secondary"
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CarList;
