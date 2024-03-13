import Auth from "../views/Auth/Auth";
import Register from "../views/Auth/Register";
import RecoverPassword from "../views/Auth/RecoverPassword";
import Admin from "../views/Cms/Admin/Index";

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
    },
    {
        path: "/cms",
        name: "CMS",
        layout: "/cms",
        component: Admin,
        invisible: true
    }


];
export default routes;