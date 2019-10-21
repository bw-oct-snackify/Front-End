import React from 'react'
import { withFormik, Form, Field } from 'formik';
import {Link} from 'react-router-dom';
import * as Yup from 'yup';
import userinfo from './userInfo.module.scss'

const UserInfo = ({ values, touched, errors }) => {

    const handleSubmit = e =>{
        console.log(e);
    };

    return (
        <div className={userinfo.background}>
            <div className={userinfo.container}>
                <h2 className={userinfo.logintitle}>Sign Up</h2><br></br>
                <Form>
                    <div className={userinfo.formwrapper}>
                    <label className={userinfo.fieldlabel}>Email * {touched.email && errors.email && (
                        <p>{errors.email}</p> 
                    )}<br></br>
                    <Field className={userinfo.loginfield}
                    type='email'
                    name='email'
                    placeholder='Email Address'
                    value={values.email}
                    /></label><br></br>

                    <label className={userinfo.fieldlabel}>Password *{touched.password && errors.password && (
                        <p>{errors.password}</p>
                    )}<br></br>
                    <Field className={userinfo.loginfield}
                    type='password'
                    name='password'
                    placeholder='Password'
                    value={values.password}
                    /></label><br></br>

                    <label className={userinfo.fieldlabel}>Confirm Password *{touched.confirm && errors.confirm && (
                        <p>{errors.confirm}</p>
                    )}<br></br>
                    <Field className={userinfo.loginfield}
                    type='password'
                    name='confirm'
                    placeholder='Confirm Password'
                    value={values.confirm}
                    /></label>

                    <p>Password must be 8 Characters long</p>
                    <label className={userinfo.fieldlabel}>Compony Code (optional) <br></br>
                    <Field className={userinfo.loginfield}
                    type='text'
                    name='code'
                    placeholder='appleseed-snackify-123'
                    value={values.code}
                    /></label><br></br>

                    <p>A company code would be provided by your admin</p>
                    <button className={userinfo.button}type='submit'>Create Account!</button>
                    <p>Have an account? <Link to='/login'> Sign In! </Link></p>
                    </div>
                </Form>
            </div>
        </div>
    )
}

const FormikUserInfo = withFormik({
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
})(UserInfo);

export default FormikUserInfo;
