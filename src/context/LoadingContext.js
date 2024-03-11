import React, { createContext, useState } from "react";
import AuthContext from "./AuthContext.js";

const LoadingContext = createContext();

const LoadingProvider = ({ children }) => {

    const [loading, setLoading] = useState(false);
    const data = { loading, setLoading };
    return React.createElement(AuthContext.Provider, { value: data }, children);
}

export { LoadingProvider };
export default LoadingContext;