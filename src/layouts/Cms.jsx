import { useEffect } from 'react';
import { Routes, Route, useNavigate } from "react-router-dom";
import routes from "../routes/index.js";
import { LoadingProvider } from "../context/LoadingContext.js";
import useSieStore from "../store/Store.js";

const Cms = () => {
    const navigate = useNavigate();
    const isLoggedIn = useSieStore(state => state.isLoggedIn);

    useEffect(() => {
        if (!isLoggedIn()) {
            navigate('/auth');
        }
    }, [isLoggedIn, navigate]);
    const getRoutes = (routes) => {
        return routes.map((prop, key) => {
            if (prop.layout === "/cms") {
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
export default Cms;