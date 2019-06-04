import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import './Profile.css';
import img from '../../assets/images/myprofile.png';
//import classes from './Profile.css';

class Profile extends Component{

    render(){
        const style={
            margin: 'auto',
            width: '100%'
        }
        return(
            <div style={style}>
               <Grid className="Profile-grid">
                   <Cell col={12}>
                   <img style={{height: '200px'}} className="Profile-img"
                //    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSibX6z4_pQwYrdyrnKwF9q7QmNnl3o5T6MtKVu7h6fejEb03F5"
                   src={img} 
                   
                   alt="profile pic"
                   />
                   <div className="Profile-role">
                       <h1>Software Developer</h1>
                       <hr/>
                       <p>HTML/CSS | JQuery | JavaScript | ReactJS | Angular 7 | NodeJS | Express | MongoDB | Java</p>
                       <div className="social-links">

                      { /*LinkedIn*/ }
                    <a href="https://www.linkedin.com/in/nishigandhashendkar/" target="_blank" rel="noopener noreferrer">
                       <i className="fa fa-linkedin-square" aria-hidden="true" />
                    </a>

                      { /*Github*/ }
                    <a href="https://github.com/nishi2893" target="_blank" rel="noopener noreferrer">
                       <i className="fa fa-github-square" aria-hidden="true" />
                    </a>

                       </div>
                   </div>

                   </Cell>
               </Grid>
            </div>
        )
    }
}

export default Profile;