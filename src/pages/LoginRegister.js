import React, {Component} from 'react';
import { Grid, Box } from '@mui/material';
import { connect } from 'react-redux';
import { userLogin } from 'store/actions/userAction';
import { clearGlobalError } from 'store/actions/errorHandlerActions';
import LoginForm from 'auth/LoginForm';


class LoginRegisterPage extends Component{

    constructor(props){
        super(props);

        this.state = {
            numbers: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){

        const name = ["Saikat", "Biswas"];

        // [...name].filter(item=>{
        //     if(item.includes())
        //     return 
        // });

        console.log('name', [...name], 'name2', name);
        const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19];

        const numberFilter = numbers.filter(number => {
            // if(number > 5){
                return number > 5
            // }
        });
        console.log('numberFilter',numberFilter);

        const numberForEach = numbers.forEach(number=>{
            return number
        });

        console.log('numberForEach', numberForEach);

        const numberMap = numbers.map(number=>{
            return number
        });

        console.log('numberMap', numberMap);

        const numberSome = name.some((name)=>{
            if(name === 'Saikat'){
                return name
            }
            // return number
        });

        console.log('numberSome', numberSome);

        const numberEvery = name.every((name)=>{
            if(name === 'Saikat'){
                return name
            }
            // return number
        });

        console.log('numberEvery', numberEvery);

        const numberReduce = numbers.reduce((previous, number)=>{
            console.log(previous, number)
            return previous + number
        },10);

        console.log('numberreduce', numberReduce);
        
        
    }
    componentDidUpdate(previousProps){
        // console.log(previousProps, this);
    }
    componentWillUnmount(){
        this.props.dispatch(clearGlobalError());
    }

    handleSubmit(data){
        console.log('submit', data);
        // let payload = {
        //     userid:'saikatb.biswas@gmail.com',
        //     password: 'test123'
        // }
        this.props.dispatch(userLogin(data));
    }

    render(){
        

        return(
            <div>
                <h1>Login</h1>
                <div>
                    {/* {
                        this.state.numbers.forEach(number=>(
                            <div>{number}fdsfsd</div>
                        ))
                    } */}
                </div>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2} justifyContent="center">

                        <Grid item xs={6}>
                            <LoginForm formSubmit={this.handleSubmit}/>
                            {this.props.errors.error?
                                <div style={{ fontSize: '20px', color:'red'}}>{this.props.errors.msg}</div>
                            :null}
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
        errors: state.errors
    }
}

export default connect(mapStateToProps)(LoginRegisterPage);