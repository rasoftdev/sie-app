import { useState } from "react";
import { Link } from "react-router-dom";
import {
    Form,
    FormGroup,
    Input,
    Label,
    Button
} from "reactstrap";

const ForgotPassword = ({
                            data,
                            setData,
                            onSubmit,
                            errors,
                            setErrors,
                            initialForm,
                            validationsForm,
                            requiredFields,
                            isLoadingSave
                        }) => {
    const [validInit, setValidInit] = useState(false);
    const handleChange = (e) => {
        const { name, value, checked } = e.target;
        const datatype = e.target.getAttribute("data-type");

        if (datatype === "number" && isNaN(value)) {
            return;
        }
        setData({
            ...data, [name]: datatype === 'checkbox' ? checked : value,
        });
    };
    const handleBlur = (e) => {
        handleChange(e);
        if (validInit) {
            setErrors(validationsForm(data, requiredFields));
        }
    };

    return (
        <>
            <div className="auth" onSubmit={onSubmit}>
                <h2>
                    Creemos una nueva contraseña
                </h2>
                <Form>
                    <FormGroup floating className="mb-3">
                        <Input
                            id="email"
                            name="email"
                            value={data.email}
                            placeholder="Correo electrónico"
                            type="email"
                            invalid={errors && errors.email !== "" && errors.email !== undefined}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        <Label for="email">
                            Email
                        </Label>
                        <div className="invalid-feedback">
                            {errors.email}
                        </div>
                    </FormGroup>
                    <div className="footer-form">
                        <Button className="w-75"
                                type="submit"
                                disabled={isLoadingSave}>
                            {isLoadingSave ? (<i className="fa fa-spinner fa-spin"></i>) : 'Recuperar contraseña'}
                        </Button>
                    </div>
                </Form>
                <div className="register">
                    <Link to="/auth/">
                        INICIAR SESIÓN
                    </Link>
                </div>
            </div>
        </>
    )
}
export default ForgotPassword;