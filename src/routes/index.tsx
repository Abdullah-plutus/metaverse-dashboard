import {
  Login,
  Home,
  Dashboard,
  Properties,
  RentalBusiness,
  FoodBusiness,
  FuelBusiness,
  BusinessesStats,
  NotFound,
} from "../container";

export const routes = [
  {
    path: "/",
    Comp: Dashboard,
    guarded: true,
  },
  {
    path: "/login",
    Comp: Login,
    guarded: false,
  },
  {
    path: "/dashboard",
    Comp: Dashboard,
    guarded: true,
  },
  {
    path: "/properties",
    Comp: Properties,
    guarded: true,
  },
  { path: "/rental-business/:id", Comp: RentalBusiness, guarded: true },
  { path: "/fuel-business/:id", Comp: FuelBusiness, guarded: true },
  { path: "/food-business/:id", Comp: FoodBusiness, guarded: true },
  { path: "/businesses-stats", Comp: BusinessesStats, guarded: true },
  {
    path: "*",
    Comp: NotFound,
    guarded: false,
  },
];
