import { lazy } from "react";

export const Login = lazy(() => import("./Auth/Login"));
export const Home = lazy(() => import("./Home"));
export const Dashboard = lazy(() => import("./Dashboard"));
export const Properties = lazy(() => import("./Properties"));
export const RentalBusiness = lazy(() => import("./Business/RentalBusiness"));
export const FoodBusiness = lazy(() => import("./Business/FoodBusiness"));
export const FuelBusiness = lazy(() => import("./Business/FuelBusiness"));
export const NotFound = lazy(() => import("../components/Shared/404"));
export const BusinessesStats = lazy(() => import("./BusinessesStats"));
