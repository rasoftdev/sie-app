import React, { useState, useContext } from "react";
import { useNavigate } from "react-router";
import AuthComponent from "../../components/Auth/Auth.jsx";
import { useForm } from "../../hooks/useForm.js";
import AuthContext from "../../context/AuthContext.js";
import { Toaster } from 'react-hot-toast';


const initialForm = {
    email: "dev@ricardoalvarez.com.co",
    password: "12345678"
}
const requiredFields = ["email", "password"];
const validationsForm = (form) => {
    const errors = {};
    for (const key in form) {
        const displayName = key.replace(/_/g, ' ');
        if (requiredFields.includes(key) && !form[key]) {
            errors[key] = `${displayName.charAt(0).toUpperCase() + displayName.slice(1)} es requerido`;
        }
    }

    return errors;
};
const Auth = () => {
    const [isLoadingSave, setLoadingSave] = useState(false);
    const navigate = useNavigate();
    const {
        form, setForm, errors, setErrors, handleSubmit
    } = useForm(initialForm, validationsForm);
    const {
        success,
        setSuccess,
        handleAuth,
    } = useContext(AuthContext);
    const handleSave = async (e) => {
        setLoadingSave(true);
        let validate = handleSubmit(e);
        if (!validate) {
            setLoadingSave(false);
            return;
        }
        await handleAuth(form);
        if (success) {
            setSuccess(false);
            setErrors({});
            setForm(initialForm);
            navigate('/cms');
        } else {
            setLoadingSave(false);
        }

    }
    return (<>
        <div className="content-form-auth">
            <Toaster/>
            <AuthComponent
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
export default Auth;