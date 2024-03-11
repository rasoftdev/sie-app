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
            return (
                <Route
                    path={prop.path}
                    element={<prop.component/>}
                    key={key}
                />
            );
        });
    };
    return (
        <>
            <div>
                CMS - LAYOUT
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