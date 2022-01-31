import React,{Component} from'react';
import { connect } from 'react-redux';
import { userIsAuth } from '../store/actions/userAction';

export default function AuthGuard(ComposeComponent, priverRoute, adminRoute = null){

    class RouteGuard extends Component{

        constructor(props){
            super(props);

            this.state = {
                loading: true
            }
        }

    
        componentDidMount(){
            console.log(this);
            // const authData = this.props.dispatch(userIsAuth());
            this.props.dispatch(userIsAuth())
        }

    
        componentDidUpdate(prevProps){
            console.log(prevProps.user, '+++', this.props.user);
            
            if(prevProps.user !== this.props.user){
                // console.log(prevProps.user.auth);
                // console.log(this.props.user.auth);
                
                const path = this.props.history.location.pathname

                let user =this.props.user;

                // console.log('is auth',user)
                if(user.auth !== undefined){
                    if(user.auth){
                        if(priverRoute === false){
                            // console.log(path);
                            // alert(user.auth);
                            this.props.history.push('/dashboard');
                            
                        }
                    }else{
                        if(priverRoute){
                            // alert(user.auth);
                            this.props.history.push('/');
                        }
                        
                    }
                }
                

                // if(this.props.auth){
                //     console.log('yes', priverRoute);
                //     if(!priverRoute){
                //         this.props.history.push('/dashboard');
                //     }
                // }else{
                //     if(priverRoute){
                //         console.log('no', priverRoute);
                //         this.props.history.push('/');
                //     }
                // }
                // alert('1');
                // if(!this.props.auth){
                    
                //     if(priverRoute){
                //         console.log('no', priverRoute);
                //         this.props.history.push('/');
                //     }
                    
                // }else{
                //     console.log('yes', priverRoute);
                //     // const path = this.props.history.location.pathname;
                //     // console.log('path', path)
                //     if(!priverRoute){
                //         this.props.history.push('/dashboard');
                //     }
                // }

                this.setState({
                    loading:false
                });
            }
            
        }
    
        render(){
            // if()
            return(
                this.state.loading?
                    <div>Loading</div>
                :
                <ComposeComponent {...this.props} user={this.props.user} />
            )
        }
    }

    const mapStateToProps = (state)=>{
        return{
            user: state.user
        }
    }
    
    // const mapDispatchToProps = ()=>{
    //     return {
    //         userIsAuth
    //     }
    // }
    
    return connect(mapStateToProps)(RouteGuard);

}



