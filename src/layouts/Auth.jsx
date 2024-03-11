import React from 'react';
import { Routes, Route } from "react-router-dom";
import routes from "../routes/index.js";
import { LoadingProvider } from "../context/LoadingContext.js";

const Auth = () => {
    const getRoutes = (routes) => {
        return routes.map((prop, key) => {
            if (prop.collapse) {
                return getRoutes(prop.views);
            }
            if (prop.layout === "/auth") {
                return (
                    <Route
                        path={`${prop.path}`}
                        element={<prop.component />}
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
            <div>
                AUTH - LAYOUT
                <LoadingProvider>
                    <Routes>
                        {getRoutes(routes)}
                    </Routes>
                </LoadingProvider>
            </div>
        </>
    )
}
export default Auth;