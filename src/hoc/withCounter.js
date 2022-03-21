import React, {Component} from "react";

const CounterHoc = (ComposedComponent)=>{
    class CounterComponent extends Component{

        constructor(props) {
            super(props);
            this.incrementCount = this.incrementCount.bind(this);
            this.state = {
               count: 0
            }
          }
      
          incrementCount(){
              this.setState((prevState)=>{
                  return { count: prevState.count + 1 }
              });
          }

        render(){
            return <ComposedComponent count={this.state.count} incrementCount={this.incrementCount} />
        }
    }
    return CounterComponent;
}

export default CounterHoc;