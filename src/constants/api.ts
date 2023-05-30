const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000/";
const APP_URL = process.env.REACT_APP_URL || "http://localhost:3000/";

const ROUTES = {
  AUTH_LOGIN: "auth/login",
  AUTH_CURRENT_USER: "auth/me",
  GET_PROPERTIES: "business/get-user-properties",
  GET_FOOD_BUSINESS: "business/get-food-business",
  GET_RENTAL_BUSINESS: "business/get-rental-business",
  GET_FUEL_BUSINESS: "business/get-fuel-business",
  ADD_RENTAL_BUSINESS: "business/add-rental-business",
  ADD_FOOD_BUSINESS: "business/add-food-business",
  ADD_FUEL_BUSINESS: "business/add-fuel-business",
  UPDATE_RENTAL_BUSINESS: "business/update-rental-business",
  UPDATE_FOOD_BUSINESS: "business/update-food-business",
  UPDATE_FUEL_BUSINESS: "business/update-fuel-business",
};

export default { API_URL, ROUTES, APP_URL };
