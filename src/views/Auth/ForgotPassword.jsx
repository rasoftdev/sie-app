import React, { useState, useContext, useEffect } from "react";
import ForgotPasswordComponent from "../../components/Auth/ForgotPassword.jsx";
import { useNavigate } from 'react-router-dom';
import { useForm } from "../../hooks/useForm.js";
import AuthContext from "../../context/AuthContext.js";
import { Toaster } from 'react-hot-toast';


const initialForm = {
    email: "",
}
const requiredFields = ["email"];
const validationsForm = (form) => {
    const errors = {};
    for (const key in form) {
        const displayName = key.replace(/_/g, ' ');
        if (requiredFields.includes(key) && !form[key]) {
            errors[key] = `Campo es requerido`;
        }
    }

    return errors;
};
const ForgotPassword = () => {
    const navigate = useNavigate();
    const [isLoadingSave, setLoadingSave] = useState(false);
    const {
        form, setForm, errors, setErrors, handleSubmit
    } = useForm(initialForm, validationsForm);
    const {
        success,
        setSuccess,
        handleForgotPassword,
    } = useContext(AuthContext);

    useEffect(() => {
        if (success) {
            setSuccess(false);
            setErrors({});
            setForm(initialForm);
            setTimeout(() => {
                navigate('/auth');
            }, 800);
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
        await handleForgotPassword(form);
    }
    return (<>
        <div className="content-form-auth">
            <Toaster/>
            <ForgotPasswordComponent
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
export default ForgotPassword;