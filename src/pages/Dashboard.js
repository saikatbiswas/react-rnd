import React, {Component, createRef} from 'react';
import { connect } from 'react-redux';
import { getDashboardData } from 'store/actions/dashboardActions';

import ContextComponent from 'components/dashboard/ContextComponent';
import CustomButton from 'components/dashboard/CustomButton';

import Subject from '../components/dashboard/Subject';

const myArray = [
    {"fact":"A cat can jump 5 times.","length":106},
    {"fact":"When a cat drinks, its tongue .","length":92},
    {"fact":"A cat sees about 6 times.","length":172}
];

class DashboardPage extends Component{
    constructor(props){
        super(props);

        this.myRef = createRef();
        // document.cookie = "username=John Doe; expires=Thu, 18 Dec 2013 12:00:00 UTC";

    }

    componentDidMount(){
        console.log(this)
    }
    componentDidUpdate(prevProps){
        if(prevProps.user !== this.props.user){
            this.props.dispatch(getDashboardData(this.props.user.student_id));
        }
    }

    render(){

        const items = [];
        myArray
            .forEach(item => items.push(
                <li key={item.length}>
                    {item.fact}
                </li>
                ))

        // return(
        //     <ul>{items}</ul>
        // );
        
        return(
            <div>
                <h1>Dashboard Page</h1>
                
                {this.props.dashboardData && this.props.dashboardData.subject_list?
                    <Subject items={this.props.dashboardData.subject_list} />
                :null}

                <div>
                     <ContextComponent />
                </div>
                <h2>Forward ref</h2>
                <CustomButton ref={this.myRef}>Forword ref button</CustomButton>
            </div>
        )
    }
}

const mapPropsToState = (state)=>{
    return{
        dashboardData: state.dashboard
    }
}

export default connect(mapPropsToState)(DashboardPage);