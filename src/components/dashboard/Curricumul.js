import React from "react";
import {Card, CardContent, Button } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

import curriculamImage from "../../assets/img/user.jpg";

const Curricumul = ({curriculums})=>{
    return(
        <Card>
            <CardContent style={{
                display: 'flex',
                alignItems:'center'
            }}>
                <div className="pdg-right-card-img-wrap">
                    {/* ${process.env.PUBLIC_URL} */}
                    {/* <div className="pdg-right-card-img" style={{backgroundImage: `url(${process.env.PUBLIC_URL + '../../assets/img/user.jpg'}})`}}></div> */}
                    <div className="pdg-right-card-img" style={{backgroundImage: `url(${curriculamImage})`}}>
                    </div> 
                </div>
                <div className="pdg-right-card-content">
                    <h3 className="pdg-right-card-heading">Curriculum Details</h3>
                    <p>Check our list of online videos &amp; more</p>
                    <Button variant="contained" startIcon={<PlayArrowIcon />}> Browse</Button>
                </div>
            </CardContent>
        </Card>
    )
}

export default Curricumul;