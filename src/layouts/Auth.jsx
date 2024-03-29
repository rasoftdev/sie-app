import { useEffect } from 'react';
import { Routes, Route, useNavigate } from "react-router-dom";
import routes from "../routes/index.js";
import { Container, Row, Col } from "reactstrap"
import useSieStore from "../store/Store.js";
import { LoadingProvider } from "../context/LoadingContext.js";
import { AuthProvider } from "../context/AuthContext.js";

const Auth = () => {
    const navigate = useNavigate();
    const isLoggedIn = useSieStore(state => state.isLoggedIn);

    useEffect(() => {
        if (isLoggedIn()) {
            navigate('/cms');
        }
    }, [isLoggedIn, navigate, location.pathname]);
    const getRoutes = (routes) => {
        return routes.map((prop, key) => {
            if (prop.layout === "/auth") {
                return (<Route
                    path={`${prop.path}`}
                    element={<prop.component/>}
                    key={key}
                />);
            } else {
                return null;
            }
        });
    };
    return (<>
        <Container fluid className="auth-container p-0 m-0">
            <Row className="section p-0 m-0 h-100">
                <Col lg="6" md="12" sm="12"
                     className="d-flex align-items-center justify-content-center flex-column p-lg-5 p-md-5 p-4">
                    <div className="header">
                        <img src="../images/sie-logo.webp" alt="SIE"/>
                        <div>
                            <h1>
                                Bienvenido
                            </h1>
                        </div>
                    </div>
                    <LoadingProvider>
                        <AuthProvider>
                            <Routes>
                                {getRoutes(routes)}
                            </Routes>
                        </AuthProvider>
                    </LoadingProvider>
                </Col>
                <Col lg="6" md="6" className="d-none d-lg-flex p-0">
                    <div className="bg-section">
                    </div>
                </Col>
            </Row>
        </Container>
    </>)
}
export default Auth;