import React, {Component} from 'react';
import { Grid, Box, TextField, Button } from '@mui/material';
import { connect } from 'react-redux';
import { userLogin } from 'store/actions/userAction';


class LoginRegisterPage extends Component{

    constructor(props){
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        // console.log(this);
    }

    handleSubmit(){
        console.log('submit');
        let payload = {
            userid:'saikatb.biswas@gmail.com',
            password: 'test123'
        }
        this.props.dispatch(userLogin(payload));
    }

    render(){
        return(
            <div>
                <h1>Login</h1>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2} justifyContent="center">

                        <Grid item xs={6}>
                            <TextField
                                fullWidth 
                                margin="normal"
                                required
                                id="outlined-required"
                                label="Email"
                                type="email"
                                defaultValue="Hello World"
                            />
                            <TextField
                                fullWidth 
                                margin="normal"
                                id="outlined-password-input"
                                label="Password"
                                type="password"
                                autoComplete="current-password"
                            />

                            <Button variant="contained" onClick={()=> this.handleSubmit()}>Submit</Button>
                        </Grid>
                    </Grid>
                </Box>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return{
        userAuth: state.user.auth,
        userData: state.user.userData,
    }
}

export default connect(mapStateToProps)(LoginRegisterPage);