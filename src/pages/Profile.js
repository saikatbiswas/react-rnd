import React,{ Component } from "react";
import EditProfile from "components/profile/EditProfile";


class Profile extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <EditProfile />
        )
    }
}

export default Profile;
