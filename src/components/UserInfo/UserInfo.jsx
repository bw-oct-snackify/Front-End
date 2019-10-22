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
                <h2 className={userinfo.logintitle}>Sign Up</h2>
                <Form>
                    <div className={userinfo.formwrapper}>
                    <label className={userinfo.fieldlabel}>Email * {touched.email && errors.email && (
                        <p className={userinfo.error}>{errors.email}</p> 
                    )}
                    <Field className={userinfo.loginfield}
                    type='email'
                    name='email'
                    placeholder='Email Address'
                    value={values.email}
                    /></label>

                    <label className={userinfo.fieldlabel}>Password *{touched.password && errors.password && (
                        <p className={userinfo.error}>{errors.password}</p>
                    )}
                    <Field className={userinfo.loginfield}
                    type='password'
                    name='password'
                    placeholder='Password'
                    value={values.password}
                    /></label>
                    <p>Password must be 8 Characters long</p>
                    <label className={userinfo.fieldlabel}>Confirm Password *{touched.confirm && errors.confirm && (
                        <p className={userinfo.error}>{errors.confirm}</p>
                    )}
                    <Field className={userinfo.loginfield}
                    type='password'
                    name='confirm'
                    placeholder='Confirm Password'
                    value={values.confirm}
                    /></label>

                    <label className={userinfo.fieldlabel}>Compony Code (optional) 
                    <Field className={userinfo.loginfield}
                    type='text'
                    name='code'
                    placeholder='appleseed-snackify-123'
                    value={values.code}
                    /></label>

                    <p>A company code would be provided by your admin</p>
                    <button className={userinfo.button}type='submit'>Create Account!</button>
                    <p className={userinfo.logintitle}>Have an account? <Link className={userinfo.link} to='/login'> Sign In! </Link></p>
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
        password: Yup.string().min(8).required('Please enter a valid password!'),
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
