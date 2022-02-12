import React, {Component, createRef} from 'react';
import ContextComponent from 'components/dashboard/ContextComponent';
import CustomButton from 'components/dashboard/CustomButton';


class DashboardPage extends Component{
    constructor(props){
        super(props);

        this.myRef = createRef();
        // document.cookie = "username=John Doe; expires=Thu, 18 Dec 2013 12:00:00 UTC";

    }

    componentDidMount(){
        
        // let cook = document.cookie.split(';');
        // console.log(cook);
        // const hhh = document.querySelector('h1');
        // const inVal = window.prompt();
        // console.log(inVal);

        // var Y = 1;
        // if (function F(){})
        // {
        //     Y += typeof F;
        // }
        // console.log(Y);

        // var Output = (function(x)
        // {
        //     delete X;
        //     return X;
        // }
        // )(0);
        // console.log(Output);

    }

    render(){
        return(
            <div>
                <h1>Dashboard Page</h1>

                <div>
                     <ContextComponent />
                </div>
                <h2>Forward ref</h2>
                <CustomButton ref={this.myRef}>Forword ref button</CustomButton>
            </div>
        )
    }
}

export default DashboardPage;