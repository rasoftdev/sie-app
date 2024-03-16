import { useState } from "react";
import { Link } from "react-router-dom";
import {
    Form,
    FormGroup,
    Input,
    Label,
    Button
} from "reactstrap";

const ResetPassword = ({
                           data,
                           setData,
                           onSubmit,
                           errors,
                           setErrors,
                           initialForm,
                           validationsForm,
                           isLoadingSave
                       }) => {
    const [validInit, setValidInit] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
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
            setErrors(validationsForm(data));
        }
    };

    return (
        <>
            <div className="auth" onSubmit={onSubmit}>
                <h2>
                    Crea tu nueva contraseña
                </h2>
                <Form>
                    <FormGroup floating className="mb-3">
                        <Input
                            id="password"
                            name="password"
                            value={data.password}
                            placeholder="Contraseña"
                            type={showPassword ? "text" : "password"}
                            invalid={errors && errors.password !== "" && errors.password !== undefined}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        <Label for="password">
                            Nueva contraseña
                        </Label>
                        <div className="invalid-feedback">
                            {errors.password}
                        </div>
                        <div onClick={() => setShowPassword(!showPassword)}
                             style={{
                                 position: 'absolute',
                                 cursor: 'pointer',
                                 right: '2rem',
                                 top: '1rem',
                             }}>
                            {showPassword ? (<i className="fa fa-eye-slash"></i>) : (<i className="fa fa-eye"></i>)}
                        </div>
                    </FormGroup>
                    <FormGroup floating className="mb-3">
                        <Input
                            id="password_confirmation"
                            name="password_confirmation"
                            value={data.password_confirmation}
                            placeholder=" Confirmar contraseña"
                            type={showPassword ? "text" : "password"}
                            invalid={errors && errors.password_confirmation !== "" && errors.password_confirmation !== undefined}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        <Label for="password">
                            Confirmar contraseña
                        </Label>
                        <div className="invalid-feedback">
                            {errors.password_confirmation}
                        </div>
                        <div onClick={() => setShowPassword(!showPassword)}
                             style={{
                                 position: 'absolute',
                                 cursor: 'pointer',
                                 right: '2rem',
                                 top: '1rem',
                             }}>
                            {showPassword ? (<i className="fa fa-eye-slash"></i>) : (<i className="fa fa-eye"></i>)}
                        </div>
                    </FormGroup>
                    <div className="footer-form">
                        <Button className="w-75"
                                type="submit"
                                disabled={isLoadingSave}>
                            {isLoadingSave ? (<i className="fa fa-spinner fa-spin"></i>) : 'Crear contraseña'}
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
export default ResetPassword;