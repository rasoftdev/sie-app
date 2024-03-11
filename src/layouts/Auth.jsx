import React from 'react';
import { Routes, Route } from "react-router-dom";
import routes from "../routes/index.js";
import { Container, Row, Col } from "react-bootstrap";
import { LoadingProvider } from "../context/LoadingContext.js";

const Auth = () => {
    const getRoutes = (routes) => {
        return routes.map((prop, key) => {
            if (prop.layout === "/auth") {
                return (
                    <Route
                        path={`${prop.path}`}
                        element={<prop.component/>}
                        key={key}
                    />
                );
            } else {
                return null;
            }
        });
    };
    console.log(getRoutes(routes));
    return (
        <>
            <Container fluid>
                <Row>
                    <Col lg="6" md="6" sm="12">
                        <LoadingProvider>
                            <Routes>
                                {getRoutes(routes)}
                            </Routes>
                        </LoadingProvider>
                    </Col>
                    <Col lg="6" md="6" sm="12">
                        Content
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default Auth;