import React from 'react'
import { Formik, } from 'formik';
import "./login.module.scss";
import * as Yup from 'yup';
import Login from "./Login";

const validationSchema = Yup.object().shape({
    email: Yup.string()
    .email("Input a valid email!")
    .required("Must have an email login!"),
    password: Yup.string()
    .min(8, "Password must contain at least 8 characters")
    .required("Enter your password"),
});

const LoginInput = (props) => {
    return (<div >
        
    </div>);
}


export default LoginInput;