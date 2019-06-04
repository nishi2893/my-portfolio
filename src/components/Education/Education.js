import React from 'react';
import {Grid, Cell} from 'react-mdl';

const education = (props) => (
    <div>
       <Grid>
           <Cell col={4}>
           <p style={{fontSize: '15px'}}>August {props.startYear} - May {props.endYear}</p>
           </Cell>
           <Cell col={8}>
           <h4 style={{marginTop: '0px'}}>{props.schoolName}</h4>
           <p style={{fontSize: '16px'}}>{props.schoolDescription}</p>
           </Cell>
       </Grid>
    </div>
)

export default education;