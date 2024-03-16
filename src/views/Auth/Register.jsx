import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router";
import RegisterComponent from "../../components/Auth/Register.jsx";
import { useForm } from "../../hooks/useForm.js";
import AuthContext from "../../context/AuthContext.js";
import { Toaster } from 'react-hot-toast';


const initialForm = {
    first_name: '',
    last_name: '',
    document_type: '',
    document_number: '',
    document_issuance: '',
    document_issuance_date: '',
    rh: '',
    gender: '',
    address: '',
    neighborhood: '',
    main_phone: '',
    stratum: '',
    sisben: '',
    country: '',
    state: '',
    city: '',
    location_type: '',
    email: '',
}
const requiredFields = [
    'first_name',
    'last_name',
    'document_type',
    'document_number',
    'document_issuance',
    'document_issuance_date',
    'rh',
    'gender',
    'address',
    'neighborhood',
    'main_phone',
    'stratum',
    'sisben',
    'country',
    'state',
    'city',
    'location_type',
    'email',
];
const validationsForm = (form) => {
    const errors = {};
    for (const key in form) {
        const displayName = key.replace(/_/g, ' ');
        if (requiredFields.includes(key) && !form[key])
            errors[key] = `Campo es requerido`;
        // errors[key] = `${displayName.charAt(0).toUpperCase() + displayName.slice(1)} es requerido`;
    }
    return errors;
};
const Register = () => {
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
        await handleAuth(form);

    }
    return (<>
        <div className="content-form-auth">
            <Toaster/>
            <RegisterComponent
                data={form}
                setData={setForm}
                onSubmit={handleSave}
                errors={errors}
                setErrors={setErrors}
                initialForm={initialForm}
                isLoadingSave={isLoadingSave}
            />
        </div>
    </>)
}
export default Register;