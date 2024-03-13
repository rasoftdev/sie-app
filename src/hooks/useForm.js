import {useState} from "react";

export const useForm = (initialForm, validateForm) => {

    const [validateInit, setValidateInit] = useState(false);
    const [validate, setValidate] = useState(true);
    const [form, setForm] = useState(initialForm);
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let cont = 0;
        setValidateInit(true);
        let erroresTemp = validateForm(form);
        setErrors(erroresTemp);
        Object.entries(erroresTemp).forEach(([key, value]) => {
            if (Array.isArray(value)) {
                value.forEach((item) => {
                    if (item) {
                        cont++;
                        setValidate(false);
                    }
                })
            } else {
                if (value) {
                    cont++;
                    setValidate(false);
                }
            }

        });
        if (cont) {
            return false;
        } else {
            return true;
        }
    };

    return {
        validateInit,
        validate,
        form,
        errors,
        setValidateInit,
        setValidate,
        setForm,
        setErrors,
        handleChange,
        handleSubmit,
    };
};