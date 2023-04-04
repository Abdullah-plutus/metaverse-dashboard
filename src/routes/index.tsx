import { Login, Register, Home } from "../container";

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
    path: "/register",
    Comp: Register,
    guarded: false,
  },
];
