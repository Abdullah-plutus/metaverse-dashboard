import { lazy } from "react";

export const Login = lazy(() => import("./Auth/Login"));
export const Register = lazy(() => import("./Auth/Register"));
export const Home = lazy(() => import("./Home"));
