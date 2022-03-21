import React, { Component } from "react";
import { connect } from "react-redux";

class KitStatus extends Component{

    render(){
        return(
            <div>Kit Status</div>
        )
    }
}

export default connect()(KitStatus);