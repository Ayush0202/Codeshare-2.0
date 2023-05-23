import React from "react";
import Navbar from '../Header/Navbar'
import LoginForm from "./LoginForm";

const Login = () => {
    return <>
        <Navbar />

        <h1>Log in to access your saved codes</h1>

        <LoginForm />

    </>

}

export default Login