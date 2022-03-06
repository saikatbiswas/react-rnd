import React,{ Component } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import HeaderMenu from "./header-components/HeaderMenu";


class Header extends Component{

    constructor(props){
        super(props);

        // this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogout(){
        // localStorage.removeItem('user');
        this.setState({
            anchorEl: null,
            open: false
        });
        // this.props.his
    }

    render(){
        return(
            <header className="header-wrapper header-sticky">
                <div className="toggle-menu-btn" onClick={this.props.menuToggle}>
                    <MenuIcon/>
                </div>
                <h1>Logo</h1>

                <div className="header-right-nav ml-auto">
                    <HeaderMenu />
                </div>
            </header>
        )
    }
}

export default Header;