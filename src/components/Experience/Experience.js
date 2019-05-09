import React from 'react';
import {Grid, Cell} from 'react-mdl';
import './Experience.css';

const experience = (props) => (
    <div>
       <Grid>
           {/* <Cell col={4}>
           <p>{props.startYear} - {props.endYear}</p>
           </Cell> */}
           <Cell col={6}>
           <h4 style={{marginTop: '0px'}}>{props.employer}</h4>
           <p style={{fontSize: '17px', margin: 'auto', padding: '0px'}}>{props.employeeRole}</p>
           </Cell>
           <Cell col={6}>
           <p style={{fontSize: '16px'}}><i>{props.startDate} - {props.endDate}</i></p>
           </Cell>
       </Grid>
    </div>
)

export default experience;