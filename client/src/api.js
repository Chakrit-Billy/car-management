import axios from "axios";

const api = axios.create({
  baseURL: "https://car-management-vert.vercel.app/api", // Adjust the URL as per your backend configuration and dont forget to modify port
});

export const getCars = () => api.get("/cars");
export const addCar = (car) => api.post("/cars", car);
export const updateCar = (id, car) => api.put(`/cars/${id}`, car);
export const deleteCar = (id) => api.delete(`/cars/${id}`);

export default api;
