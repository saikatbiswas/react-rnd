import React, { Component } from "react";
import {Card, CardContent, Button, Grid, Container } from '@mui/material';

class Subject extends Component{
    constructor(props){
        super(props);

        this.renderSubject = this.renderSubject.bind(this);
    }

    renderSubject(){
        const props = this.props;
        // console.log(this.props.items)
        return props.items.map(item=>(
            <Grid item lg={3} md={4} sm={6} key={item.i_subject_id} className={props.column === 5 ? 'MuiGrid-item col-custom-5': ''}>
            {/* <div className={props.column === 5 ? 'MuiGrid-item col-custom-5': 'MuiGrid-root MuiGrid-item MuiGrid-grid-sm-6 MuiGrid-grid-md-4 MuiGrid-grid-lg-3 css-zc9n2g-MuiGrid-root'} key={item.i_subject_id}> */}
                <Card>
                    <CardContent>
                        <h3>{item.s_subject_name}</h3>

                        <Button>Watch Video</Button>
                    </CardContent>
                </Card>
                {/* </div> */}
            </Grid>
        ));
    }

    render(){
        return(
            // <Container fixed>
                <Grid container spacing={2}>
                    {this.renderSubject()}
                </Grid>
                
            // </Container>
        )
    }


}

export default Subject;