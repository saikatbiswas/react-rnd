import React, { Component } from "react";
import { TextField, Button } from '@mui/material';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { errorHelper } from 'utils/tools';


class LoginForm extends Component{

  render(){
      const validationSchema = Yup.object({
          userid: Yup.string()
          .required("lease enter a Email ID/Mobile number")
          .test('user-id', 'Please enter valid Email ID/Mobile number', 
          (value)=> {
              const emailRegex = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
              const phoneRegex = /^(\+91-|\+91|0)?\d{10}$/;

              let isValidEmail = emailRegex.test(value);
              let isValidPhone = phoneRegex.test(value);
              if (!isValidEmail && !isValidPhone ){
              return false;
              }
              return true;
          }),
          password: Yup
            .string('Enter your password')
            .required('Password is required'),
      });

      return(
          <Formik
              initialValues={{ userid: '', password: '' }}
              validationSchema={validationSchema}
              // onSubmit={(values, { setSubmitting, resetForm }) => {
              onSubmit={(values, { resetForm }) => {
              //    setSubmitting(true);
                  this.props.formSubmit(values);
                  // resetForm(true);
              }}
              
            >
              {(props) => {
                const {
                  touched,
                  errors,
                  handleSubmit,
                  getFieldProps,
                } = props;
                return (
                  <form onSubmit={handleSubmit}>
                    <TextField
                      fullWidth
                      label="Enter Email/Mobile number"
                      name="userid"
                      margin="normal"
                      {...getFieldProps('userid')}
                      {...errorHelper(props, 'userid')}
                    />

                    <TextField
                      fullWidth
                      error={errors.password && touched.password}
                      label="Password"
                      name="password"
                      margin="normal"
                      {...getFieldProps('password')}
                      {...errorHelper(props, 'password')}
                    />

                      <Button variant="contained" type="submit">
                          Submit
                      </Button>
                  </form>
                );
              }}
            </Formik>
        )
    }
}

export default LoginForm;