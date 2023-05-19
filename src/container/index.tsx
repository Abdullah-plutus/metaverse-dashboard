import { lazy } from "react";

export const Login = lazy(() => import("./Auth/Login"));
export const Home = lazy(() => import("./Home"));
export const Dashboard = lazy(() => import("./Dashboard"));
export const Properties = lazy(() => import("./Properties"));
export const NotFound = lazy(() => import("../components/Shared/404"));
