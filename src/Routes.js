import React,{ Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import AuthGuard from 'hoc/RouteGuard';
import PrivetRoutes from 'hoc/PrivetRoutes';

import LoginRegisterPage from 'pages/LoginRegister';
import DashboardPage from 'pages/Dashboard';
import ProductsdPage from 'pages/Products';
import Session from 'pages/Session';

import LearnWithMentor from 'pages/LearnWithMentor';

import Profile from 'pages/Profile';
import NoticeFromTeacher from 'pages/NoticeFromTeacher';
import NoticeFromAdmin from 'pages/NoticeFromAdmin';
import DiscussionBoard from 'pages/DiscussionBoard';
import KitStatus from 'pages/KitStatus';


const ComponenetError = ()=>{
  return(
    <div>404 Not faund</div>
  )
}

class Routes extends Component{

  render(){
    return(
      <BrowserRouter>
          <Switch>

            <Route path="/" exact component={AuthGuard(LoginRegisterPage, false)} />

            <PrivetRoutes path="/kit-status" component={AuthGuard(KitStatus, true)} />
            <PrivetRoutes path="/discussion-board" component={AuthGuard(DiscussionBoard, true)} />
            <PrivetRoutes path="/notice-from-admin" component={AuthGuard(NoticeFromAdmin, true)} />
            <PrivetRoutes path="/notice-from-teacher" component={AuthGuard(NoticeFromTeacher, true)} />
            <PrivetRoutes path="/session" component={AuthGuard(Session, true)} />
            <PrivetRoutes path="/learn-with-mentor" component={AuthGuard(LearnWithMentor, true)} />
            <PrivetRoutes path="/profile" component={AuthGuard(Profile, true)} />
            <PrivetRoutes path="/product" component={AuthGuard(ProductsdPage, true)} />
            <PrivetRoutes path="/dashboard" component={AuthGuard(DashboardPage, true)} />
            
            <Route
              path="*"
              component={AuthGuard(ComponenetError, null)}
            /> 

            
            
          </Switch>
          
        
      </BrowserRouter>
    )
  }

}
export default Routes;
