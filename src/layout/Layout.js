import React,{ Component } from "react";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import Header from "./Header";


class Layout extends Component{

    constructor(props){
        super(props);
        this.menuToggleHandler = this.menuToggleHandler.bind(this);

        this.state = {
            menuToggle: false,
        }
    }

    menuToggleHandler(){
        this.setState({
            menuToggle: !this.state.menuToggle
        });

        console.log('Layout toggle',this);
    }

    render(){
        return(
            <div className={`main-container ${this.state.menuToggle? 'sidebar-open' : ''}`}>
                
                <Sidebar />
                    <div className="main-wrapper">
                        <Header menuToggle={this.menuToggleHandler} />
                
                        <div className="main-content-wrapper">{this.props.children}</div>
                    <Footer />
                </div>
            </div>
        )
    }
}

export default Layout;