import React from 'react';
import { withFormik, Form, Field } from 'formik';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import userinfo from './userInfo.module.scss';
import { axiosInstance } from '../../utils/axiosInstance';

const UserInfo = ({ values, touched, errors, isSubmitting }) => {
    return (
        <div className={userinfo.background}>
            <div className={userinfo.container}>
                <h2 className={userinfo.logintitle}>Sign Up</h2>
                <Form>
                    <div className={userinfo.formwrapper}>
                        <label className={userinfo.fieldlabel}>
                            Name *{' '}
                            {touched.name && errors.name && (
                                <p className={userinfo.error}>{errors.name}</p>
                            )}
                            <Field
                                className={userinfo.loginfield}
                                type="text"
                                name="name"
                                placeholder="Full Name"
                                value={values.name}
                            />
                        </label>

                        <label className={userinfo.fieldlabel}>
                            Email *{' '}
                            {touched.email && errors.email && (
                                <p className={userinfo.error}>{errors.email}</p>
                            )}
                            <Field
                                className={userinfo.loginfield}
                                type="email"
                                name="email"
                                placeholder="Email Address"
                                value={values.email}
                            />
                        </label>

                        <label className={userinfo.fieldlabel}>
                            Password *
                            {touched.password && errors.password && (
                                <p className={userinfo.error}>
                                    {errors.password}
                                </p>
                            )}
                            <Field
                                className={userinfo.loginfield}
                                type="password"
                                name="password"
                                placeholder="Password"
                                value={values.password}
                            />
                        </label>
                        <p className={userinfo.fade}>
                            Password must be 8 Characters long
                        </p>
                        <label className={userinfo.fieldlabel}>
                            Confirm Password *
                            {touched.confirm && errors.confirm && (
                                <p className={userinfo.error}>
                                    {errors.confirm}
                                </p>
                            )}
                            <Field
                                className={userinfo.loginfield}
                                type="password"
                                name="confirm"
                                placeholder="Confirm Password"
                                value={values.confirm}
                            />
                        </label>

                        <label className={userinfo.fieldlabel}>
                            Compony Code (optional)
                            <Field
                                className={userinfo.loginfield}
                                type="text"
                                name="code"
                                placeholder="appleseed-snackify-123"
                                value={values.code}
                            />
                        </label>

                        <p className={userinfo.fade}>
                            A company code would be provided by your admin
                        </p>
                        <button
                            disabled={isSubmitting}
                            className={userinfo.button}
                            type="submit"
                        >
                            Create Account!
                        </button>
                        <p className={userinfo.logintitle}>
                            Have an account?{' '}
                            <Link className={userinfo.link} to="/login">
                                {' '}
                                Sign In!{' '}
                            </Link>
                        </p>
                    </div>
                </Form>
            </div>
        </div>
    );
};

const FormikUserInfo = withFormik({
    mapPropsToValues({ name, email, password, confirm, code }) {
        return {
            name: name || '',
            email: email || '',
            password: password || '',
            confirm: confirm || '',
            code: code || '',
        };
    },
    validationSchema: Yup.object().shape({
        name: Yup.string().required('Name is required'),
        email: Yup.string()
            .email('Email not valid')
            .required('Email is required'),
        password: Yup.string()
            .min(8, 'Password must be 8 character or longer')
            .required('Password is required!'),
        confirm: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Password must match')
            .required('Please enter the same password again!'),
    }),
    handleSubmit(values, { setSubmitting, props }) {
        if (values.code) {
            props.updateUser(values);
            axiosInstance
                .post('/auth/register', {
                    name: values.name,
                    email: values.email,
                    password: values.password,
                    company_code: values.code,
                })
                .then(res => {
                    props.createUser();
                })
                .catch(err => {
                    console.log(err.response.data.message);
                    if (err.response.data.message) {
                        alert(
                            `failed to register account ${err.response.data.message}`
                        );
                    } else {
                        alert(
                            `failed to register account ${err.response.data}`
                        );
                    }
                    setSubmitting(false);
                });
        } else {
            props.updateUser(values);
            props.incrementPage();
        }
    },
})(UserInfo);

export default FormikUserInfo;
