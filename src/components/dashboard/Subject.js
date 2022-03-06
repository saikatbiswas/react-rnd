import React, { Component } from "react";
import {Card, CardContent, Button } from '@mui/material';

class Subject extends Component{
    constructor(props){
        super(props);

        this.renderSubject = this.renderSubject.bind(this);
    }

    renderSubject(){
        // console.log(this.props.items)
        return this.props.items.map(item=>(
            <Card key={item.i_subject_id}>
                <CardContent>
                    <h3>{item.s_subject_name}</h3>

                    <Button>Watch Video</Button>
                </CardContent>
            </Card>
        ));
    }

    render(){
        return(
            <div>
                {this.renderSubject()}
            </div>
        )
    }


}

export default Subject;