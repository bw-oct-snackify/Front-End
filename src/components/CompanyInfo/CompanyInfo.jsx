import React from 'react'
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import companyinfo from "./companyInfo.module.scss"


const CompanyInfo = ({ values, touched, errors, incrementPage }) => {

  return (
    <div className={companyinfo.background}>
      <h2 className={companyinfo.logintitle}>Step 2/3</h2>
      <div className={companyinfo.container}>
        <h2 className={companyinfo.logintitle}>Tell us about your company!</h2>
        <Form>
          <div className={companyinfo.formwrapper}>
            <label>Company Name {touched.companyName && errors.companyName && (
              <p className={companyinfo.error}>{errors.companyName}</p>
            )}
            <Field className={companyinfo.loginfield}
            type='name'
            name='companyName'
            placeholder='Company Name'
            value={values.companyName}
            /></label>

            <label>Company Phone Number {touched.companyPhone && errors.companyPhone && (
              <p className={companyinfo.error}>{errors.companyPhone}</p>
            )}
            <Field className={companyinfo.loginfield}
            type='name'
            name='companyPhone'
            placeholder='(555) 555-0123'
            value={values.companyPhone}
            /></label>

            <label>Location {touched.companyLocationCity && errors.companyLocationCity && (
              <p className={companyinfo.error}>{errors.companyLocationCity}</p>
            )}
            <Field className={companyinfo.loginfield}
            type='name'
            name='companyLocationCity'
            placeholder='City'
            value={values.companyLocationCity}
            /></label>
            <label>{touched.companyLocationState && errors.companyLocationState && (
              <p className={companyinfo.error}>{errors.companyLocationState}</p>
            )}
            <Field className={companyinfo.loginfield}
            type='name'
            name='companyLocationState'
            placeholder='State'
            value={values.companyLocationState}
            /></label>
            <button className={companyinfo.button} type='submit'>Pick Package!</button>
          </div>
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
  handleSubmit(values, {props}) {
    props.updateUser(values);
    props.incrementPage();
    //where we will do our post or move onto next part of registration (maybe?)
  }
})(CompanyInfo);

export default FormikCompany;