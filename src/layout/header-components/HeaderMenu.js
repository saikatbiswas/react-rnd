import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
// import { Avatar, Button, ClickAwayListener, ListItemIcon, Grow, IconButton, Menu, MenuItem, Paper,Popper, MenuList, Stack } from '@mui/material'
import { Button, ClickAwayListener, Grow,  MenuItem, Paper,Popper, MenuList } from '@mui/material'

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
        console.log(isOpen);
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
        this.props.dispatch(userSignout());
        this.props.history.push('/')
    }

    render(){
        return(
            <div>
                <Button
                    id="basic-button"
                    aria-controls={this.state.open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={this.state.open ? 'true' : undefined}
                    onClick={this.handleClick}
                >
                    Dashboard
                </Button>
                <Popper
                    open={this.state.open}
                    anchorEl={this.state.anchorEl}
                    role={undefined}
                    placement="bottom-start"
                    transition
                    disablePortal
                    >
                    {({ TransitionProps, placement }) => (
                        <Grow
                        {...TransitionProps}
                        style={{
                            transformOrigin:
                            placement === 'bottom-start' ? 'left top' : 'left bottom',
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
                                <MenuItem onClick={this.handleClose}>Profile</MenuItem>
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
        userData: state.user.userData
    }
}

export default connect(mapStateToProps) (withRouter(HeaderMenu));