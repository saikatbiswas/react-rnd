import React, {Component, createRef} from 'react';
import { connect } from 'react-redux';
import {Card, CardContent, Grid } from '@mui/material';
import { Loader } from 'utils/tools';
import { getDashboardData } from 'store/actions/dashboardActions';

import ContextComponent from 'components/dashboard/ContextComponent';
import CustomButton from 'components/dashboard/CustomButton';

import LearnWithMentor from 'components/dashboard/LearnWithMentor';
import NoticeBoard from 'components/dashboard/NoticeBoard';
import Subject from '../components/dashboard/Subject';

import Champions from 'components/dashboard/Champions';
import Curricumul from 'components/dashboard/Curricumul';

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

    // componentDidMount(){
    //     console.log(this)
    // }
    componentDidUpdate(prevProps){
        if(prevProps.user !== this.props.user){
            this.props.dispatch(getDashboardData(this.props.user.student_id));
        }
    }

    render(){
        console.log(this.props.dashboardData);
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
            <>
                <h1>Dashboard Page</h1>
                <Card className='mb-3'>
                    <CardContent>
                        <Grid container spacing={2}>
                            <Grid item lg={4} md={5}>
                                {this.props.dashboardData.class && this.props.dashboardData.batch_teacher_dt ?
                                    <LearnWithMentor 
                                        className={this.props.dashboardData.class} 
                                        batchName={this.props.dashboardData.batchCode}
                                        mentorName={`${this.props.dashboardData.batch_teacher_dt.s_first_name} ${this.props.dashboardData.batch_teacher_dt.s_last_name}` }
                                        totalClass={this.props.dashboardData.total_class_no}
                                    />
                                    :null
                                }
                            </Grid>
                            <Grid item lg={8} md={7}>
                                <div className='notice-board-part'>
                                    {this.props.dashboardData && this.props.dashboardData.NoticeBoard?
                                        <NoticeBoard items={this.props.dashboardData.NoticeBoard} />
                                    :
                                        <Loader />
                                    }
                                </div>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>

                <Grid container spacing={2}>
                    
                    <Grid item lg={8}>
                        {/* Learn & Notice board end */}
                            {this.props.dashboardData && this.props.dashboardData.subjectsWithGames?
                                <Card className='mb-3'>
                                    <CardContent>
                                        <h2>I Learn On My Own</h2>
                                        <div className="mb-3">
                                            <Subject items={this.props.dashboardData.subjectsWithGames} />
                                        </div>

                                        {this.props.dashboardData.subjectsWithoutGames ?
                                            <Subject items={this.props.dashboardData.subjectsWithoutGames} column={5} />
                                        :null}
                                    </CardContent>
                                </Card>
                            :
                                <Loader />
                            }
                        <div>
                            <ContextComponent />
                        </div>
                        <h2>Forward ref</h2>
                        <CustomButton ref={this.myRef}>Forword ref button</CustomButton>
                    </Grid>
                    <Grid item lg={4}>
                        {this.props.dashboardData.llchampionsdata ? 
                            <Champions items={this.props.dashboardData.llchampionsdata} />
                        :
                            <Loader />
                        }

                        {/* Curricumul */}
                        {this.props.dashboardData.curiculamactivities ? 
                            <Curricumul curriculums={this.props.dashboardData.curiculamactivities} />
                        :
                            <Loader />
                        }
                        {/* Curricumul end */}
                    </Grid>
                    
                </Grid>
            </>
        )
    }
}

const mapPropsToState = (state)=>{
    return{
        dashboardData: state.dashboard
    }
}

export default connect(mapPropsToState)(DashboardPage);