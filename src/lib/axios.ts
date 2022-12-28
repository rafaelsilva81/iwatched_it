import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/movie",
});

/* TODO: specific api functions */
export default api;
