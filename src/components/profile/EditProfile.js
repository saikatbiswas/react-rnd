import React, { Component } from "react";
import { Formik } from "formik";
import * as Yup from 'yup';
import { Button, TextField } from "@mui/material";

import { errorHelper } from 'utils/tools';

class EditProfile extends Component{
    constructor(props){
        super(props)
    }


    render(){
        return(
            <Formik 
                initialValues={{
                    old_password:'',
                    new_password:'',
                    confirm_password:''
                }}
                validationSchema={Yup.object({
                    old_password:Yup.string()
                    .required('Old password is required'),
                    new_password:Yup.string()
                    .required('Password is required')
                    .matches(
                        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
                       'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character',
                    ),
                    confirm_password:Yup.string()
                    .oneOf([Yup.ref('new_password'), null], 'Passwords must match')
                    .required('Confirm password is required'),
                })}
                onSubmit={(value)=>{
                    const { old_password, new_password } = value;
                    console.log(old_password, new_password);
                }}
            >
                {props=>{
                    const {
                        touched,
                        errors,
                        handleSubmit,
                        getFieldProps,
                    } = props;
                    return(
                        <form onSubmit={handleSubmit}>
                            <TextField
                                fullWidth
                                label="Old Password"
                                name="old_password"
                                margin="normal"
                                type="password"
                                {...getFieldProps('old_password')}
                                {...errorHelper(props, 'old_password')}
                            />
                            <TextField 
                                fullWidth
                                label="New Password"
                                name="new_password"
                                margin="normal"
                                type="password"
                                {...getFieldProps('new_password')}
                                {...errorHelper(props, 'new_password')}
                            />
                            <TextField 
                                fullWidth
                                label="Confirm Password"
                                name="confirm_password"
                                margin="normal"
                                type="password"
                                {...getFieldProps('confirm_password')}
                                {...errorHelper(props, 'confirm_password')}
                            />
                            <Button variant="contained" type="submit">Submit</Button>
                        </form>
                    )
                }}

            </Formik>
        )
    }


}

export default EditProfile;