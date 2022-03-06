import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
// import { Avatar, Button, ClickAwayListener, ListItemIcon, Grow, IconButton, Menu, MenuItem, Paper,Popper, MenuList, Stack } from '@mui/material'
import { Button, ClickAwayListener, Grow,  MenuItem, Paper,Popper, MenuList,
    Avatar, IconButton } from '@mui/material'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Link } from "react-router-dom";

import { userSignout } from '../../store/actions/userAction';

class HeaderMenu extends Component{

    constructor(props){
        super(props);

        this.handleClick = this.handleClick.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleListKeyDown = this.handleListKeyDown.bind(this);
        this.handleLogout = this.handleLogout.bind(this);

        this.state = {
            anchorEl: null,
            open: false
        }
    }

    handleClick(event){
        const isOpen = Boolean(event.currentTarget);
        this.setState({
            anchorEl: event.currentTarget,
            open: isOpen
        });
    }
    handleClose(){
        this.setState({
            anchorEl: null,
            open: false
        });
    }
    handleListKeyDown(){
        this.setState({
            anchorEl: null,
            open: false
        });
    }
    handleLogout(){
        // localStorage.removeItem('user');
        this.setState({
            anchorEl: null,
            open: false
        });
        // const { history } = this.props;
        this.props.dispatch(userSignout(this.props.history));
        // this.props.history.push('/');
    }
    
    componentDidUpdate(prevProps){
        // console.log(prevProps.userData, this.props.userData);
        if(prevProps.userData.auth !== this.props.userData.auth){
            
        }
    }

    render(){
        return(
            <div>
                {/* <Button
                    id="basic-button"
                    aria-controls={this.state.open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={this.state.open ? 'true' : undefined}
                    onClick={this.handleClick}
                >
                    <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
                    Dashboard
                </Button> */}
                <MenuItem
                    className={this.state.open?'dropmenu-open':''}
                    aria-controls={this.state.open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={this.state.open ? 'true' : undefined}
                    onClick={this.handleClick}
                >
                    <Avatar 
                        src={this.props.userData.parent.s_profile_pic?this.props.userData.parent.s_profile_pic:'https://mui.com/static/images/avatar/1.jpg'} 
                        style={{marginRight: '8px'}} 
                    /> {this.props.userData.parent.s_first_name} {this.props.userData.parent.s_last_name}
                    <ArrowDropDownIcon className="drop-arrow-icon" />
                </MenuItem>
                {/* <IconButton
                    size="small"
                    sx={{ ml: 2 }}
                    aria-controls={this.state.open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={this.state.open ? 'true' : undefined}
                    onClick={this.handleClick}
                >
                    <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
                    Dashboard
                </IconButton> */}
                <Popper
                    open={this.state.open}
                    anchorEl={this.state.anchorEl}
                    role={undefined}
                    placement="bottom-end"
                    transition
                    disablePortal
                    >
                    {({ TransitionProps, placement }) => (
                        <Grow
                        {...TransitionProps}
                        style={{
                            transformOrigin:
                            placement === 'bottom-end' ? 'left top' : 'left bottom',
                        }}
                        >
                        <Paper>
                            <ClickAwayListener onClickAway={this.handleClose}>
                            <MenuList
                                autoFocusItem={this.state.open}
                                id="composition-menu"
                                aria-labelledby="composition-button"
                                onKeyDown={this.handleListKeyDown}
                                style={{display: !this.state.open?'none':''}}
                            >
                                <MenuItem 
                                    component={Link}
                                    to="/profile"
                                    onClick={this.handleClose}
                                >
                                   Profile
                                </MenuItem>
                                <MenuItem onClick={this.handleClose}>My account</MenuItem>
                                <MenuItem onClick={this.handleLogout}>Logout</MenuItem>
                            </MenuList>
                            </ClickAwayListener>
                        </Paper>
                        </Grow>
                    )}
                    </Popper>
                    
                {/* <Menu
                    id="basic-menu"
                    anchorEl={this.state.anchorEl}
                    open={this.state.open}
                    onClose={this.handleClose}
                    MenuListProps={{
                    'aria-labelledby': 'basic-button',
                    }}
                >
                    <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                    <MenuItem onClick={this.handleClose}>My account</MenuItem>
                    <MenuItem onClick={this.handleClose}>Logout</MenuItem>
                </Menu> */}
            </div>
        )
    }

}

const mapStateToProps = (state)=>{
    return{
        userData: state.user
    }
}

export default connect(mapStateToProps) (withRouter(HeaderMenu));