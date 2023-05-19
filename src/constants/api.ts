const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000/";
const APP_URL = process.env.REACT_APP_URL || "http://localhost:3000/";

const ROUTES = {
  AUTH_LOGIN: "auth/login",
  AUTH_CURRENT_USER: "auth/me",
  ADD_RENTAL_BUSINESS: "business/add-rental-business",
  ADD_FOOD_BUSINESS: "business/add-food-business",
  ADD_FUEL_BUSINESS: "business/add-fuel-business",
};

export default { API_URL, ROUTES, APP_URL };
