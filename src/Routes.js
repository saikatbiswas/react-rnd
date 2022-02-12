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

class Routes extends Component{

  render(){
    return(
      <BrowserRouter data-test="routes-component">
        <Switch>
          {/* <Route path="/product" component={AuthGuard(ProductsdPage, true)} />
          <Route path="/dashboard" component={AuthGuard(DashboardPage, true)} />
          <Route path="/" exact component={AuthGuard(LoginRegisterPage, false)} />
        
          <Route
            path="*"
            component={AuthGuard(ComponenetError, null)}
          /> */}
          <Route path="/product" component={ProductsdPage} />
          <Route path="/dashboard" component={DashboardPage} />
          <Route path="/" exact component={LoginRegisterPage} />
        
          <Route
            path="*"
            component={ComponenetError}
          />
        </Switch>
      </BrowserRouter>
    )
  }

}
export default Routes;
