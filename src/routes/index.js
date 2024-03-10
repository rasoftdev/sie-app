import Auth from "../views/Auth/Auth";
import Register from "../views/Auth/Register";
import RecoverPassword from "../views/Auth/RecoverPassword";

const routes = [
    {
        path: "/",
        icon: "",
        layout: "/auth",
        component: Auth,
        invisible: true
    },
    {
        path: "/register",
        icon: "",
        layout: "/auth",
        component: Register,
        invisible: true
    },
    {
        path: "/recover-password",
        icon: "",
        layout: "/auth",
        component: RecoverPassword,
        invisible: true
    }

];
export default routes;