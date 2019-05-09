import React from 'react';
import {Grid, Cell, ProgressBar} from 'react-mdl';

const skills = (props) => (
    <div>
       <Grid>
           <Cell col={12}>
           <div style={{display: 'flex'}}>
              <p style={{fontSize: '16px'}}><b>{props.technicalskill}</b></p>
              <ProgressBar style={{margin: 'auto', width: '60%'}} progress={props.progress}/>
           </div>
           </Cell>
       </Grid>
    </div>
)

export default skills;