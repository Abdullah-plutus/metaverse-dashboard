const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000/";
const APP_URL = process.env.REACT_APP_URL || "http://localhost:3000/";

const ROUTES = {
  AUTH_LOGIN: "auth/login",
};

export default { API_URL, ROUTES, APP_URL };
