import React, { Component } from "react";
import { connect } from 'react-redux';
import { getNoticeFormTeacherList } from '../store/actions/notificationActions';


class NoticeFromTeacher extends Component{

    // componentDidMount(){
    //     console.log(this.props.user);
    //     console.log(this.props.user.student_id);
    //     this.props.getNoticeFormTeacherList(this.props.user.student_id)
    // }

    componentDidUpdate(prevProps){
        if(prevProps.user !== this.props.user){
            console.log(this.props);
            this.props.getNoticeFormTeacherList({studentId:this.props.user.student_id})
            // this.props.dispatch(getNoticeFormTeacherList({studentId:this.props.user.student_id}));
        }
    }

    render(){
        return(
            <div>Notice from Teacher</div>
        )
    }
}

const mapPropsToState = (state)=>{
    return{
        noticeFromAdmin: state.fromAdmin
    }
}

// const mapDispatchToProps = (dispatch, ownProps)=>{
//     console.log(ownProps);
//     return{
//         getNoticeFormTeacherList
//     }
    
// }

const mapDispatchToProps = (dispatch) => {
    return {
        getNoticeFormTeacherList: (studentId) => {
            dispatch(getNoticeFormTeacherList(studentId))
        }
    };
};

export default connect(mapPropsToState, mapDispatchToProps)(NoticeFromTeacher);