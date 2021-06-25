import React from 'react';
import { Route } from "react-router-dom";
import FormData from "./components/loginFormData";
import Dashboard from "./components/dashboard";

const Routes = () => {
    return (
        <div>
            <Route exact path="/" component={FormData}/>
            <Route path="/dashboard" component={Dashboard}/>
        </div>
    );
}

export default Routes;