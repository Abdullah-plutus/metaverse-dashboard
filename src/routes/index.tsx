import { Login, Register, ChangePassword } from "../container";

export const routes = [
    {
        path: "/",
        Comp: Login,
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
    {
        path: "/change-password",
        Comp: ChangePassword,
        guarded: false,
    },
];