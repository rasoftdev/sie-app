import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Auth from './layouts/Auth.jsx';
import Cms from './layouts/Cms.jsx';

function App() {
    return (
        <>
            <BrowserRouter>
                <AuthProvider>
                    <Routes>
                        <Route path="/auth/*" element={<Auth />} />
                        <Route path="/cms/*" element={<Cms />} />
                        <Route path="/" element={<Navigate to="/auth" />} />
                    </Routes>
                </AuthProvider>
            </BrowserRouter>
        </>
    )
}

export default App;