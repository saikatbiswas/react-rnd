import React,{ Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import AuthGuard from 'hoc/RouteGuard';
import PrivetRoutes from 'hoc/PrivetRoutes';

import LoginRegisterPage from 'pages/LoginRegister';
import DashboardPage from 'pages/Dashboard';
import ProductsdPage from 'pages/Products';


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

            <PrivetRoutes path="/product" component={AuthGuard(ProductsdPage, true)} />
            <PrivetRoutes path="/dashboard" component={AuthGuard(DashboardPage, true)} />
            
            <Route
              path="*"
              component={AuthGuard(ComponenetError, false)}
            /> 

            
            
          </Switch>
          
        
      </BrowserRouter>
    )
  }

}
export default Routes;