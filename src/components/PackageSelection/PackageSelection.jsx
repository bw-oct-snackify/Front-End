import React from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import packageselection from './packageselection.module.scss'

const PackageSelection = ({ values, touched, errors }) => {
  return (
    <div>
      <h1>Pick Your Package</h1>
      <Field 
      type='radio'
      name='small'
      id='small'
      /><label for='small'>Small Team 199.00/mo</label><br></br>
      <Field 
      type='radio'
      name='medium'
      id='medium'
      /><label for='medium'>Medium Team  $399.00/mo</label><br></br>
      <Field 
      type='radio'
      name='large'
      id='large'
      /><label for='large'>Large Team  $599.00/mo</label><br></br>
      <Field 
      type='radio'
      name='mega'
      id='mega'
      /><label for='mega'>Mega Team  Contact Us</label><br></br>
      <button>Confirm Package!</button>
    </div>
  )
}

const FormikPackageSelection = withFormik({
  mapPropsToValues({ }) {
    return {
      
    }
  },
  handleSubmit(values) {

    console.log(values)
  }
})(PackageSelection);

export default FormikPackageSelection;