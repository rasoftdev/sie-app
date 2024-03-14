import { useState } from "react";
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
                <img src="./images/sie-logo.webp" alt="SIE"/>
                <div>
                    <h1>
                        Bienvenido
                    </h1>
                    <h2>
                        Inicia sesión para continuar
                    </h2>
                </div>
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
                            {errors.password}
                        </div>
                    </FormGroup>
                    <FormGroup floating className="mb-3">
                        <Input
                            id="password"
                            name="password"
                            value={data.password}
                            placeholder="Contraseña"
                            type="password"
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
                    </FormGroup>
                    <div className="footer-form">
                        <Button className="w-75"
                                type="submit"
                                disabled={isLoadingSave}>
                            {isLoadingSave ? (<i className="fa fa-spinner fa-spin"></i>) : 'Entrar'}
                        </Button>
                    </div>
                </Form>
            </div>
        </>
    )
}
export default Auth;