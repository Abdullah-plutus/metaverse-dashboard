import { lazy } from "react";

export const Login = lazy(() => import("./Auth/Login"));
export const SignIn = lazy(() => import("./Auth/SignIn"));
export const Home = lazy(() => import("./Home"));
export const Dashboard = lazy(() => import("./Dashboard"));
export const Properties = lazy(() => import("./Properties"));
