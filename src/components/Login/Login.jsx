import React from 'react';
import {Link} from 'react-router-dom';
import { withFormik, Form, Field } from "formik";
import * as Yup from 'yup';
import login from "./login.module.scss";

const Login = ({values, errors, touched}) =>{
    return (
       
            <div className={login.background}>

            
                <div className={login.container}>
                    <Form>
                        <div className={login.formwrapper}>
                        
                        <h2 className={login.logintitle}>Login</h2>
                        <div className={login.errors}>
                            {touched.username && errors.username && (<p className={login.err}>{errors.username}</p>)}
                            {touched.password && errors.password && (<p className={login.err}>{errors.password}</p>)}
                        </div>
                        <label className={login.fieldlabel} htmlFor="username">Email * </label>
                        <Field className={login.loginfield} type="text" name="username" id="username" placeholder="jane@janedoe.com" />
                        
                        <label className={login.fieldlabel} htmlFor="password">Password * </label>
                        <Field className={login.loginfield} type="password" name="password" id="password" />
                        
                        <button className={login.loginbutton} type="submit">Login</button> 
                        </div>
                    </Form>
                    <p>If you don't have an account <Link to="/register"> click here to register</Link>.</p>
                </div>
            </div>
    );
}

const FormikLoginForm = withFormik({
    mapPropsToValues({ username, password }){
        return {
            username: username || '',
            password: password || ''
        };
    },

    validationSchema: Yup.object().shape({
        username: Yup.string()
            .email("Please enter a valid email!")
            .required('Username field is required.'),

        password: Yup.string()
            .required('Password field is required.')
            .min(8, 'Your password must be at least 8 characters long.')

    }),

    handleSubmit(values, {resetForm, ...rest}){
        console.log("submitted?");
        console.log(values);
    }

})(Login);

export default FormikLoginForm;