import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardContent } from '@mui/material';
import { getLearnWithMentor } from '../store/actions/learnWithMentorActions';


class LearnWithMentor extends Component{
    // constructor(props){
    //     super(props);
    // }


    componentDidMount(){
        // console.log(this);
        this.props.dispatch(getLearnWithMentor());
    }


    render(){
        return(
            <div>
                <h1>Learn with Mentor</h1>
                
                <Card>
                    <CardContent>
                        <div className='filter-part'>Filter</div>


                    </CardContent>
                </Card>
            </div>
        )
    }

}

const mapStateToProps = (state)=>{
    return{
        learnWithMentor: state.learnWithMentor
    }
}

export default connect(mapStateToProps)(LearnWithMentor);