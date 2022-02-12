import React,{Component} from'react';
import { connect } from 'react-redux';
// import { userIsAuth } from '../store/actions/userAction';

export default function AuthGuard(ComposeComponent, priverRoute, adminRoute = null){

    class RouteGuard extends Component{

        constructor(props){
            super(props);

            this.state = {
                loading: true
            }
        }

    
        componentDidMount(){
            console.log('auth',this)
            // const authData = this.props.dispatch(userIsAuth());
            // this.props.dispatch(userIsAuth())
            let user = this.props.user;

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

            this.setState({
                loading:false
            });
        }

    
        // componentDidUpdate(prevProps){
            
        //     if(prevProps.user !== this.props.user){

        //         let user = this.props.user;

        //         // console.log('is auth',user)
        //         if(user.auth !== undefined){
        //             if(user.auth){
        //                 if(priverRoute === false){
        //                     // console.log(path);
        //                     // alert(user.auth);
        //                     this.props.history.push('/dashboard');
                            
        //                 }
        //             }else{
        //                 if(priverRoute){
        //                     // alert(user.auth);
        //                     this.props.history.push('/');
        //                 }
                        
        //             }
        //         }

        //         this.setState({
        //             loading:false
        //         });
        //     }
            
        // }
    
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



