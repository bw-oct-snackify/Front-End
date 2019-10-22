import React from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import packageselection from './packageselection.module.scss'

const PackageSelection = ({ values }) => {
  return (
    <div className={packageselection.background}>
      <h2 className={packageselection.logintitle}>Step 3/3</h2>
      <div className={packageselection.container}>
        <h2 className={packageselection.logintitle}>Pick Your Package</h2>
        <Form>
          <div className={packageselection.formwrapper}>
          <Field 
          type='radio'
          name='small'
          id='small'
          /><label className={packageselection.fieldlabel} for='small'>Small Team 199.00/mo</label>
          <Field 
          type='radio'
          name='medium'
          id='medium'
          /><label className={packageselection.fieldlabel} for='medium'>Medium Team  $399.00/mo</label>
          <Field 
          type='radio'
          name='large'
          id='large'
          /><label className={packageselection.fieldlabel} for='large'>Large Team  $599.00/mo</label>
          <Field 
          type='radio'
          name='mega'
          id='mega'
          /><label className={packageselection.fieldlabel} for='mega'>Mega Team  Contact Us</label>
          <button className={packageselection.button}>Confirm Package!</button>
          </div>
        </Form>
      </div>
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