import React, {Component} from 'react';
import {Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl';
import './Contact.css';

class Contact extends Component{

    render(){
        return(
            <div className="Contact">
               <Grid className="Contact-grid">
                   <Cell col={6}>
                   <h3>Nishigandha Shendkar</h3>
                  <img src="https://t4.ftcdn.net/jpg/01/05/72/55/240_F_105725550_LsQIhnhtWkmUfJ7XMyFWAjTxtmsdlICx.jpg"
                  alt="my profile"
                  style={{height: '200px', marginBottom: '5%'}}/>
                  <p style={{width: '75%', margin: 'auto',paddingTop: '1em'}}>I would appreciate the opportunity to meet with you to discuss how my qualifications will be beneficial to your organization’s success.
                   Thanks for your time and consideration. I can be reached at the given contact details if you need any other information.</p>
                   </Cell>
                   <Cell col={6}>
                   <h3>Contact Me</h3>
                   <hr/>
                   <div className="Contact-list">
                   <List>
                    <ListItem>
                      <ListItemContent style={{fontSize: '23px', fontFamily: 'Anton'}}>
                        <i className="fa fa-phone-square" aria-hidden="true"/>
                         (310) 906-5730</ListItemContent>
                      </ListItem>

                       <ListItem>
                      <ListItemContent style={{fontSize: '23px', fontFamily: 'Anton'}}>
                        <i className="fa fa-envelope-square" aria-hidden="true"/>
                        nishishendkar288@gmail.com</ListItemContent>
                      </ListItem>

                      <ListItem>
                      <ListItemContent style={{fontSize: '23px', fontFamily: 'Anton'}}>
                        <i className="fa fa-linkedin-square" aria-hidden="true"/>
                        linkedin.com/in/nishigandhashendkar</ListItemContent>
                      </ListItem>
                      
                    </List>
                   </div>
                  
                   </Cell>
               </Grid>
            </div>
        )
    }
}

export default Contact;