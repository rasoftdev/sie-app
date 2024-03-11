import Auth from "../views/Auth/Auth";
import Register from "../views/Auth/Register";
import RecoverPassword from "../views/Auth/RecoverPassword";

const routes = [
    {
        path: "/",
        name: "Login",
        layout: "/auth",
        component: Auth,
        invisible: true
    },
    {
        path: "/register",
        name: "Register",
        layout: "/auth",
        component: Register,
        invisible: true
    },
    {
        path: "/recover-password",
        name: "Recover Password",
        layout: "/auth",
        component: RecoverPassword,
        invisible: true
    }

];
export default routes;