import Auth from "../views/Auth/Auth";
import Register from "../views/Auth/Register";
import ResetPassword from "../views/Auth/ResetPassword.jsx";
import Admin from "../views/Cms/Admin/Index";
import ForgotPassword from "../views/Auth/ForgotPassword.jsx";

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
        path: "/forgot-password",
        name: "Forgot Password",
        layout: "/auth",
        component: ForgotPassword,
        invisible: true
    },
    {
        path: "/reset-password",
        name: "Reset Password",
        layout: "/auth",
        component: ResetPassword,
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