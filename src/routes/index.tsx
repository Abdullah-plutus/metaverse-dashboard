import { Login, Home, SignIn, Dashboard, Properties } from "../container";

export const routes = [
  {
    path: "/",
    Comp: Home,
    guarded: true,
  },
  {
    path: "/login",
    Comp: Login,
    guarded: false,
  },
  {
    path: "/signIn",
    Comp: SignIn,
    guarded: false,
  },
  {
    path: "/dashboard",
    Comp: Dashboard,
    guarded: false,
  },
  {
    path: "/properties",
    Comp: Properties,
    guarded: false,
  },
];
