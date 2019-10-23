import React from 'react';
import { withFormik, Form, Field } from 'formik';
import packageselection from './packageselection.module.scss'
import { axiosInstance } from "../../utils/axiosInstance";

const PackageSelection = () => {
  return (
    <div className={packageselection.background}>
      <h2 className={packageselection.logintitle}>Step 3/3</h2>
      <div className={packageselection.container}>
        <h2 className={packageselection.logintitle}>Pick Your Package</h2>
        <Form>
          <div className={packageselection.formwrapper}>
            <label className={packageselection.fieldlabel}>Small Team  -  0-10 Employees  -  199.00/mo</label>
            <label className={packageselection.fieldlabel}>Medium Team  -  11-50 Employees  -  $399.00/mo</label>
            <label className={packageselection.fieldlabel}>Large Team  - 51-100 Employees  -  $599.00/mo</label>
            <label className={packageselection.fieldlabel}>Mega Team  -  100+ Employees  -  Contact Us</label>
            <label className={packageselection.fieldlabel}>Please select one from the dropbox below:</label>
            <Field className={packageselection.selectfield}component='select' name='companyTeamSize'>
              <option value='1'>Small Team  -  0-10 Employees  -  199.00/mo</option>
              <option value='2'>Medium Team  -  11-50 Employees  -  $399.00/mo</option>
              <option value='3'>Large Team  - 51-100 Employees  -  $599.00/mo</option>
              <option value='4'>Mega Team  -  100+ Employees  -  Contact Us</option>
            </Field>
            <button className={packageselection.button}>Confirm Package!</button>
          </div>
        </Form>
      </div>
    </div>
  )
}

const FormikPackageSelection = withFormik({
  mapPropsToValues({ companyTeamSize }) {
    return {
      companyTeamSize: companyTeamSize || '1'
    }
  },
  handleSubmit(values, {setSubmitting, props}) {
    axiosInstance()
    .post('/auth/register', {
      name: props.register.name,
      email: props.register.email,
      password: props.register.password,
    })
    .then(res => {
      console.log(res);
      //props.createUser();
      return res.data.company_ID;
    })
    .then(comp => {
      axiosInstance()
      .put(`/auth/register/company/:${comp}`, {
        name: props.register.companyName,
        phone: props.register.companyPhone,
        city: props.register.companyCity,
        state: props.register.companyState,
        package_ID:  values.companyTeamSize
      })
      .then(res => {
        console.log(res.response.data);
      })
      .catch(err => {
        console.log(err);
        console.log(err.response);
        setSubmitting(false);
      })
    })
    .catch(err => {
      console.log(err.response.data.message);
      if (err.response.data.message) {
          alert(`failed to register account ${err.response.data.message}`);
      } else {
          alert( `failed to register account ${err.response.data}` );
      }
      setSubmitting(false);
    })
  }

})(PackageSelection);

export default FormikPackageSelection;