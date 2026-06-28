import axios from "axios";

const API = axios.create({
  baseURL: "https://task-tracker-backend-pxzp.onrender.com/api/tasks",
});

export default API;