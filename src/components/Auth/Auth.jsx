import { useState } from "react";
import { Link } from "react-router-dom";
import {
    Form,
    FormGroup,
    Input,
    Label,
    Button
} from "reactstrap";

const Auth = ({
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
                    Inicia sesión para continuar
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
                            Contraseña
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
                    <div className="forgot-password">
                        <Link to="/auth/forgot-password">
                            ¿Olvidaste tu contraseña?
                        </Link>
                    </div>
                    <div className="footer-form">
                        <Button className="w-75"
                                type="submit"
                                disabled={isLoadingSave}>
                            {isLoadingSave ? (<i className="fa fa-spinner fa-spin"></i>) : 'Entrar'}
                        </Button>
                    </div>
                </Form>
                <div className="register">
                    <hr/>
                    ¿Quieres  obtener un cupo o matricular tu hijo/a?
                    <Link to="/auth/register">
                        ¡REGISTRATE!
                    </Link>
                </div>
            </div>
        </>
    )
}
export default Auth;