import { Login, Home, Dashboard, Properties, NotFound } from "../container";

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
  {
    path: "*",
    Comp: NotFound,
    guarded: false,
  },
];
