import React from 'react'
import register from "./register.module.scss"
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
// import axios from 'axios';

const Register = ({ values, touched, errors }) => {

    return (
        <div>
            <h1>Sign Up</h1>
            <Form>
                <label>Email {touched.email && errors.email && (
                    <p>{errors.email}</p> 
                )}<br></br>
                <Field
                type='email'
                name='email'
                placeholder='Email Address'
                value={values.name}
                /></label><br></br>

                <label>Password {touched.password && errors.password && (
                    <p>{errors.password}</p>
                )}<br></br>
                <Field 
                type='password'
                name='password'
                placeholder='Password'
                value={values.password}
                /></label><br></br>

                <label>Confirm Password {touched.confirm && errors.confirm && (
                    <p>{errors.confirm}</p>
                )}<br></br>
                <Field
                type='password'
                name='confirm'
                placeholder='Confirm Password'
                value={values.confirm}
                /></label>

                <p>Password must be 8 Characters long</p>
                <label>Compony Code (optional) <br></br>
                <Field
                type='text'
                name='code'
                placeholder='appleseed-snackify-123'
                value={values.code}
                /></label><br></br>

                <p>A company code would be provided by your admin</p>
                <button type='submit'>Create Account!</button>
                <p>Have an account? <span> Sign in </span></p>
            </Form>
        </div>
    )
}

const FormikRegister = withFormik({
    mapPropsToValues({ email, password, confirm, code }) {
        return {
            email: email || '',
            password: password || '',
            confirm: confirm || '',
            code: code || ''
        }
    },
    validationSchema: Yup.object().shape({
        email: Yup.string().email().required('Please enter a valid e-mail!'),
        password: Yup.string().required('Please enter a valid password!'),
        confirm: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Password must match')
        .required('Please enter the same password again!')
    }),
    handleSubmit(values) {
        //where we will do our post or move onto next part of registration
        console.log(values);
    }
})(Register);

export default FormikRegister;
