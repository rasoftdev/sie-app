import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Auth from "./layouts/Auth.jsx";

function App() {
    return (
        <>
            <BrowserRouter>
                <AuthProvider>
                    <Routes>
                        <Route path="/auth" element={<Auth/>}/>
                        <Route path="/" element={<Navigate to="/auth"/>}/>
                    </Routes>
                </AuthProvider>
            </BrowserRouter>
        </>
    )
}

export default App;