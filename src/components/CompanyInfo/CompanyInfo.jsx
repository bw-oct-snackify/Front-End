import React from 'react'
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import companyinfo from "./companyInfo.module.scss"


const CompanyInfo = ({ values, touched, errors }) => {

  return (
    <div className={companyinfo.background}>
      <div className={companyinfo.container}>
        <h2 className={companyinfo.logintitle}>Tell us about your company!</h2>
        <Form>
          <label>Company Name {touched.companyName && errors.companyName && (
            <p>{errors.companyName}</p>
          )}<br></br>
          <Field
          type='name'
          name='companyName'
          placeholder='Company Name'
          value={values.companyName}
          /></label><br></br>

          <label>Company Phone Number {touched.companyPhone && errors.companyPhone && (
            <p>{errors.companyPhone}</p>
          )}<br></br>
          <Field
          type='name'
          name='companyPhone'
          placeholder='(555) 555-0123'
          value={values.companyPhone}
          /></label><br></br>

          <label>Location {/*adjust for state or city*/touched.companyLocationCity && errors.companyLocationCity && (
            <p>{errors.companyLocationCity}</p>
          )}<br></br>
          <Field
          type='name'
          name='companyLocationCity'
          placeholder='City'
          value={values.companyLocationCity}
          /></label>
          <Field 
          type='name'
          name='companyLocationState'
          placedholder='State'
          value={values.companyLocationState}
          /><br></br>

          <button type='submit'>Pick Package!</button>
        </Form>
      </div>
    </div>
  )
}

const FormikCompany = withFormik({
  mapPropsToValues({ companyName, companyPhone, companyLocationCity, companyLocationState }) {
    return {
      companyName: companyName || '',
      companyPhone: companyPhone || '',
      companyLocationCity: companyLocationCity || '', 
      companyLocationState: companyLocationState || ''
    }
  },
  validationSchema: Yup.object().shape({
    companyName: Yup.string().required('Please enter a company name!'),
    companyPhone: Yup.string().required('Phone number required'),
    //where we need to find a Yup phone number verifier.
    companyLocationCity: Yup.string().required('Please enter a valid city'),
    companyLocationState: Yup.string().required('Please enter a valid state')

  }),
  handleSubmit(values) {
    //where we will do our post or move onto next part of registration (maybe?)
  }
})(CompanyInfo);

export default FormikCompany;