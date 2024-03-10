import React, { useState } from 'react'
import { AuthProvider } from "./conext/AuthContext.js";
import store from "./store/store.js";
import Auth from "./layouts/Auth.jsx";

function App() {
    return (
        <>
            <div>
                <BrowserRouter>
                    <AuthProvider store={store}>
                        <switch>
                            <Route path="/auth" render={(props) => <Auth {...props}/>} />
                            <Redirect from="*" to="/auth/" />
                        </switch>
                    </AuthProvider>
                </BrowserRouter>
            </div>
        </>
    )
}

export default App
