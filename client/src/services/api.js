import axios from "axios";

const API = axios.create({
  baseURL: "https://fantastic-disco-q7g5pvg99px73pxr-5000.app.github.dev/api/tasks",
});

export default API;