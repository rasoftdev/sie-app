import { useState } from "react";
import {
    Form,
    FormGroup,
    Input,
    Label,
    Button,
    Row,
    Col,
} from "reactstrap";
import Select from 'react-select';


const Register = ({
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

    const handleSelect = (e) => {
        const { name, value } = e.target;
        if (value !== undefined && value !== null && value !== '') {
            setData({ ...data, [name]: value });
            const selectedIndex = e.target.selectedIndex;
            const selectedText = e.target[selectedIndex].innerText;
        }
    }
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
            <div className="auth register" onSubmit={onSubmit}>
                <h2>
                    Solicitar un cupo o matricular a su hijo/a, ingrese sus datos
                </h2>
                <Form>
                    <Row>
                        <Col md={12}>
                            <h2>DATOS BASICOS</h2>
                        </Col>
                        <Col md={6} className="mb-3">
                            <FormGroup floating>
                                <Input
                                    id="first_name"
                                    name="first_name"
                                    value={data.first_name}
                                    placeholder="Nombre"
                                    type="text"
                                    invalid={errors && errors.first_name !== "" && errors.first_name !== undefined}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                <Label for="first_name">
                                    Nombre
                                </Label>
                                <div className="invalid-feedback">
                                    {errors.first_name}
                                </div>
                            </FormGroup>
                        </Col>
                        <Col md={6} className="mb-3">
                            <FormGroup floating>
                                <Input
                                    id="last_name"
                                    name="last_name"
                                    value={data.last_name}
                                    placeholder="Apellido"
                                    type="text"
                                    invalid={errors && errors.last_name !== "" && errors.last_name !== undefined}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                <Label for="last_name">
                                    Apellido
                                </Label>
                                <div className="invalid-feedback">
                                    {errors.last_name}
                                </div>
                            </FormGroup>
                        </Col>
                        <Col md={6} className="mb-3">
                            <FormGroup className="select">
                                <Select
                                    className={errors && errors.document_type !== "" && errors.document_type !== undefined ? "h-select error" : "h-select"}
                                    options={[]}
                                    name="document_type"
                                    id="document_type"
                                    placeholder="Tipo de documento"
                                    value={data.document_type}
                                    onChange={handleSelect}
                                    onBlur={handleBlur}
                                />
                                {errors && errors.document_type && (
                                    <div className="invalid-feedback">
                                        {errors.document_type}
                                    </div>
                                )}
                            </FormGroup>
                        </Col>
                        <Col md={6} className="mb-3">
                            <FormGroup floating>
                                <Input
                                    id="document_number"
                                    name="document_number"
                                    value={data.document_number}
                                    placeholder="Número de documento"
                                    type="text"
                                    invalid={errors && errors.document_number !== "" && errors.document_number !== undefined}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                <Label for="document_number">
                                    Número de documento
                                </Label>
                                <div className="invalid-feedback">
                                    {errors.document_number}
                                </div>
                            </FormGroup>
                        </Col>
                        <Col md={6} className="mb-3">
                            <FormGroup floating>
                                <Input
                                    id="document_issuance"
                                    name="document_issuance"
                                    value={data.document_issuance}
                                    placeholder="Lugar expedición del documento"
                                    type="text"
                                    invalid={errors && errors.document_issuance !== "" && errors.document_issuance !== undefined}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                <Label for="document_issuance">
                                    Lugar expedición del documento
                                </Label>
                                <div className="invalid-feedback">
                                    {errors.document_issuance}
                                </div>
                            </FormGroup>
                        </Col>
                        <Col md={6} className="mb-3">
                            <FormGroup floating>
                                <Input
                                    id="document_issuance_date"
                                    name="document_issuance_date"
                                    value={data.document_issuance_date}
                                    placeholder="Fecha expedición documento"
                                    type="date"
                                    invalid={errors && errors.document_issuance_date !== "" && errors.document_issuance_date !== undefined}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                <Label for="document_issuance_date">
                                    Fecha expedición documento
                                </Label>
                                <div className="invalid-feedback">
                                    {errors.document_issuance_date}
                                </div>
                            </FormGroup>
                        </Col>
                        <Col md={6} className="mb-3">
                            <FormGroup className="select">
                                <Select
                                    className={errors && errors.rh !== "" && errors.rh !== undefined ? "h-select error" : "h-select"}
                                    options={[]}
                                    name="rh"
                                    id="rh"
                                    placeholder="Tipo de sangre"
                                    value={data.rh}
                                    onChange={handleSelect}
                                    onBlur={handleBlur}
                                />
                                {errors && errors.rh && (
                                    <div className="invalid-feedback">
                                        {errors.rh}
                                    </div>
                                )}
                            </FormGroup>
                        </Col>
                        <Col md={6} className="mb-3">
                            <FormGroup floating>
                                <Input
                                    id="eps"
                                    name="eps"
                                    value={data.eps}
                                    placeholder="EPS"
                                    type="text"
                                    invalid={errors && errors.eps !== "" && errors.eps !== undefined}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                <Label for="eps">
                                    EPS
                                </Label>
                                <div className="invalid-feedback">
                                    {errors.eps}
                                </div>
                            </FormGroup>
                        </Col>
                        <Col md={6} className="mb-3">
                            <FormGroup className="select">
                                <Select
                                    className={errors && errors.stratum !== "" && errors.stratum !== undefined ? "h-select error" : "h-select"}
                                    options={[]}
                                    name="stratum"
                                    id="stratum"
                                    placeholder="Estrato"
                                    value={data.stratum}
                                    onChange={handleSelect}
                                    onBlur={handleBlur}
                                />
                                {errors && errors.rh && (
                                    <div className="invalid-feedback">
                                        {errors.stratum}
                                    </div>
                                )}
                            </FormGroup>
                        </Col>
                        <Col md={6} className="mb-3">
                            <FormGroup className="select">
                                <Select
                                    className={errors && errors.gender !== "" && errors.gender !== undefined ? "h-select error" : "h-select"}
                                    options={[]}
                                    name="gender"
                                    id="gender"
                                    placeholder="Genero"
                                    value={data.gender}
                                    onChange={handleSelect}
                                    onBlur={handleBlur}
                                />
                                {errors && errors.gender && (
                                    <div className="invalid-feedback">
                                        {errors.gender}
                                    </div>
                                )}
                            </FormGroup>
                        </Col>
                        <Col md={6} className="mb-3">
                            <FormGroup floating>
                                <Input
                                    id="birthday"
                                    name="birthday"
                                    value={data.birthday}
                                    placeholder="Fecha de nacimiento"
                                    type="date"
                                    invalid={errors && errors.birthday !== "" && errors.birthday !== undefined}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                <Label for="birthday">
                                    Fecha de nacimiento
                                </Label>
                                <div className="invalid-feedback">
                                    {errors.birthday}
                                </div>
                            </FormGroup>
                        </Col>
                        <Col md={12} className="mt-5 mb-5">
                            <hr/>
                        </Col>
                        <Col md={12}>
                            <h2>UBICACIÓN</h2>
                        </Col>
                        <Col md={6} className="mb-3">
                            <FormGroup className="select">
                                <Select
                                    className={errors && errors.country !== "" && errors.country !== undefined ? "h-select error" : "h-select"}
                                    options={[]}
                                    name="country"
                                    id="country"
                                    placeholder="País"
                                    value={data.country}
                                    onChange={handleSelect}
                                    onBlur={handleBlur}
                                />
                                {errors && errors.country && (
                                    <div className="invalid-feedback">
                                        {errors.country}
                                    </div>
                                )}
                            </FormGroup>
                        </Col>
                        <Col md={6} className="mb-3">
                            <FormGroup className="select">
                                <Select
                                    className={errors && errors.state !== "" && errors.state !== undefined ? "h-select error" : "h-select"}
                                    options={[]}
                                    name="state"
                                    id="state"
                                    placeholder="Estado"
                                    value={data.state}
                                    onChange={handleSelect}
                                    onBlur={handleBlur}
                                />
                                {errors && errors.state && (
                                    <div className="invalid-feedback">
                                        {errors.state}
                                    </div>
                                )}
                            </FormGroup>
                        </Col>
                        <Col md={6} className="mb-3">
                            <FormGroup className="select">
                                <Select
                                    className={errors && errors.city !== "" && errors.city !== undefined ? "h-select error" : "h-select"}
                                    options={[]}
                                    name="city"
                                    id="city"
                                    placeholder="Ciudad"
                                    value={data.city}
                                    onChange={handleSelect}
                                    onBlur={handleBlur}
                                />
                                {errors && errors.city && (
                                    <div className="invalid-feedback">
                                        {errors.city}
                                    </div>
                                )}
                            </FormGroup>
                        </Col>
                        <Col md={6} className="mb-3">
                            <FormGroup floating>
                                <Input
                                    id="address"
                                    name="address"
                                    value={data.address}
                                    placeholder="Dirección"
                                    type="text"
                                    invalid={errors && errors.address !== "" && errors.address !== undefined}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                <Label for="address">
                                    Dirección
                                </Label>
                                <div className="invalid-feedback">
                                    {errors.address}
                                </div>
                            </FormGroup>
                        </Col>
                        <Col md={12} className="mb-3">
                            <FormGroup floating>
                                <Input
                                    id="neighborhood"
                                    name="neighborhood"
                                    value={data.neighborhood}
                                    placeholder="Vereda o barrio"
                                    type="text"
                                    invalid={errors && errors.neighborhood !== "" && errors.neighborhood !== undefined}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                <Label for="neighborhood">
                                    Vereda o barrio
                                </Label>
                                <div className="invalid-feedback">
                                    {errors.neighborhood}
                                </div>
                            </FormGroup>
                        </Col>
                        <Col md={6} className="mb-3">
                            <Label>Zona</Label>
                            <FormGroup check>
                                <Input type="radio"
                                       id="location_type_1"
                                       name="location_type"
                                />
                                <Label check>
                                    Casco urbano
                                </Label>
                            </FormGroup>
                            <FormGroup check>
                                <Input type="radio"
                                       id="location_type_2"
                                       name="location_type"
                                />
                                <Label check>
                                    Rural
                                </Label>
                            </FormGroup>
                        </Col>
                        <Col md={12} className="mt-5 mb-5">
                            <hr/>
                        </Col>
                        <Col md={12}>
                            <h2>CONTACTOS</h2>
                        </Col>
                        <Col md={6} className="mb-3">
                            <FormGroup floating>
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
                                    Correo electrónico
                                </Label>
                                <div className="invalid-feedback">
                                    {errors.email}
                                </div>
                            </FormGroup>
                        </Col>
                        <Col md={6} className="mb-3">
                            <FormGroup floating>
                                <Input
                                    id="main_phone"
                                    name="main_phone"
                                    value={data.main_phone}
                                    placeholder="Teléfono"
                                    type="text"
                                    invalid={errors && errors.main_phone !== "" && errors.main_phone !== undefined}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                <Label for="main_phone">
                                    Teléfono
                                </Label>
                                <div className="invalid-feedback">
                                    {errors.main_phone}
                                </div>
                            </FormGroup>
                        </Col>
                    </Row>
                    <div className="footer-form">
                        <Button className="w-75"
                                type="submit"
                                disabled={isLoadingSave}>
                            {isLoadingSave ? (<i className="fa fa-spinner fa-spin"></i>) : 'Registrar'}
                        </Button>
                    </div>
                </Form>
            </div>
        </>
    )
}
export default Register;