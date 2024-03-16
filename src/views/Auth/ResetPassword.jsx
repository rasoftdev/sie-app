import React, { useState, useContext, useEffect } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import ResetPasswordComponent from "../../components/Auth/ResetPassword.jsx";
import { useForm } from "../../hooks/useForm.js";
import AuthContext from "../../context/AuthContext.js";
import { Toaster } from 'react-hot-toast';


const initialForm = {
    password: "",
    password_confirmation: "",
    token: "",
    email: ""
}
const requiredFields = ["password", "password_confirmation"];
const validationsForm = (form) => {
    const errors = {};
    for (const key in form) {
        const displayName = key.replace(/_/g, ' ');
        if (requiredFields.includes(key) && !form[key]) {
            errors[key] = `${displayName.charAt(0).toUpperCase() + displayName.slice(1)} es requerido`;
        }
    }
    if (form.password !== form.password_confirmation) {
        errors.password_confirmation = 'Las contraseñas no coinciden';
    }

    return errors;
};
const ResetPassword = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const token = query.get('token');
    const email = query.get('email');
    const [isLoadingSave, setLoadingSave] = useState(false);
    const {
        form, setForm, errors, setErrors, handleSubmit
    } = useForm(initialForm, validationsForm);
    const {
        success,
        setSuccess,
        handleResetPassword,
    } = useContext(AuthContext);

    useEffect(() => {
        initialForm.token = token;
        initialForm.email = atob(email);
        setForm(initialForm);
        if (!token) {
            navigate('/auth');
            return null;
        }
    }, []);

    useEffect(() => {
        if (success) {
            setSuccess(false);
            setErrors({});
            setForm(initialForm);
        } else {
            setLoadingSave(false);
        }
    }, [success]);
    const handleSave = async (e) => {
        setLoadingSave(true);
        let validate = handleSubmit(e);
        if (!validate) {
            setLoadingSave(false);
            return;
        }
        await handleResetPassword(form);
    }
    return (<>
        <div className="content-form-auth">
            <Toaster/>
            <ResetPasswordComponent
                data={form}
                setData={setForm}
                onSubmit={handleSave}
                errors={errors}
                setErrors={setErrors}
                initialForm={initialForm}
                validationsForm={validationsForm}
                isLoadingSave={isLoadingSave}
            />
        </div>
    </>)
}
export default ResetPassword;