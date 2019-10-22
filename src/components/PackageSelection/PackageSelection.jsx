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
            <label className={packageselection.fieldlabel} for='small'>Small Team  -  0-10 Employees  -  199.00/mo</label>
            <label className={packageselection.fieldlabel} for='medium'>Medium Team  -  11-50 Employees  -  $399.00/mo</label>
            <label className={packageselection.fieldlabel} for='large'>Large Team  - 51-100 Employees  -  $599.00/mo</label>
            <label className={packageselection.fieldlabel} for='mega'>Mega Team  -  100+ Employees  -  Contact Us</label>
            <label className={packageselection.fieldlabel} for='mega'>Please select one from the dropbox below:</label>
            <Field className={packageselection.selectfield}component='select'>
              <option value='small'>Small Team  -  0-10 Employees  -  199.00/mo</option>
              <option value='medium'>Medium Team  -  11-50 Employees  -  $399.00/mo</option>
              <option value='large'>Large Team  - 51-100 Employees  -  $599.00/mo</option>
              <option value='mega'>Mega Team  -  100+ Employees  -  Contact Us</option>
            </Field>
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