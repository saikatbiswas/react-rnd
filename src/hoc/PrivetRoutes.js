import React from 'react'
import { Route } from 'react-router-dom'

// import AgentDashboard from './agent-dashboard-component'
import Layout from 'layout/Layout'

const PrivetRoutes = ({ component: Component, ...rest }) => {
    return (
        <Route {...rest} render={props => (
            <Layout>
                <Component {...props} />
            </Layout>
        )} />
    )
}

export default PrivetRoutes