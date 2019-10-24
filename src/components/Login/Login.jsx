import React from "react";
import { connect } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import login from "./login.module.scss";
import { loginUser } from "../../store/actions/dashboardActions";

const Login = ({
  errors,
  touched,
  isAuthenticating,
  loggedIn,
  authenticationError
}) => {
  const history = useHistory();

  if (isAuthenticating) {
    return (
      <div className={login.processing}>
        <i className="fa fa-cookie fa-7x fa-spin"></i>
      </div>
    );
  }

  if (loggedIn) {
    history.push("/");
  }

  return (
    <div className={login.background}>
      <div className={login.container}>
        <Form>
          <div className={login.formwrapper}>
            <h2 className={login.logintitle}>Login</h2>
            <div className={login.errors}>
              {touched.username && errors.username && (
                <p className={login.err}>{errors.username}</p>
              )}
              {touched.password && errors.password && (
                <p className={login.err}>{errors.password}</p>
              )}
            </div>
            <label className={login.fieldlabel} htmlFor="username">
              Email *{" "}
            </label>
            <div className={login.loginfield}>
              <i class="fas fa-user"></i>

              <Field
                type="text"
                className={login.textfield}
                name="username"
                id="username"
                placeholder="jane@janedoe.com"
              />
            </div>
            <label className={login.fieldlabel} htmlFor="password">
              Password *{" "}
            </label>
            <div className={login.loginfield}>
              <i class="fas fa-lock"></i>
              <Field
                className={login.textfield}
                type="password"
                name="password"
                placeholder="password"
                id="password"
              />
            </div>

            <button className={login.loginbutton} type="submit">
              Login
            </button>
            {authenticationError && (
              <p className={login.err}>{authenticationError.data}</p>
            )}
          </div>
        </Form>
        <p>
          If you don't have an account{" "}
          <Link to="/register" className={login.registerLink}>
            {" "}
            click here to register
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

const FormikLoginForm = withFormik({
  mapPropsToValues({ username, password }) {
    return {
      username: username || "",
      password: password || ""
    };
  },

  validationSchema: Yup.object().shape({
    username: Yup.string()
      .email("Please enter a valid email!")
      .required("Username field is required."),

    password: Yup.string()
      .required("Password field is required.")
      .min(8, "Your password must be at least 8 characters long.")
  }),

  handleSubmit(values, { props }) {
    props.loginUser({
      email: values.username,
      password: values.password
    });
  }
})(Login);

const mapStateToProps = state => {
  return {
    isAuthenticating: state.dashboardReducer.isAuthenticating,
    loggedIn: state.dashboardReducer.loggedIn,
    authenticationError: state.dashboardReducer.authenticationError
  };
};

export default connect(
  mapStateToProps,
  { loginUser }
)(FormikLoginForm);
