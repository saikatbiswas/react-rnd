import React,{ Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import LoginRegisterPage from 'pages/LoginRegister';
import DashboardPage from 'pages/Dashboard';
import ProductsdPage from 'pages/Products';
import AuthGuard from 'hoc/RouteGuard';

const ComponenetError = ()=>{
  return(
    <div>404 Not faund</div>
  )
}

class RouteComponent extends Component{

  render(){
    return(
      <BrowserRouter>
        <Switch>
          <Route path="/product" component={AuthGuard(ProductsdPage, true)} />
          <Route path="/dashboard" component={AuthGuard(DashboardPage, true)} />
          <Route path="/" exact component={AuthGuard(LoginRegisterPage, false)} />
        
          <Route
            path="*"
            component={AuthGuard(ComponenetError, null)}
          />
        </Switch>
      </BrowserRouter>
    )
  }

}
export default RouteComponent;
