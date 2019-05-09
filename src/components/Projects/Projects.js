import React, {Component} from 'react';
import {Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton} from 'react-mdl';
import './Projects.css';

class Projects extends Component{

    state={
        activeTab: 0
    }

    toggleCategories = () => {
        
        if(this.state.activeTab === 0)
        {
            return(
                <div className="Projects-grid">

                    {/* Project 1*/}
                   <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                   <CardTitle style={{color: '#fff', height: '176px', 
                   background: 'url(https://reactjs.org/logo-og.png) center / cover'}}>
                   Burger House
                   </CardTitle>
                   <CardText>
                   This application creates a burger with the help of the given ingredients and calculates the total cost of the burger. The user can place the order, the detials of the customer and the order is stored in firebase.
                   </CardText>
                   <CardActions border>
                      <a href="https://github.com/nishi2893/burger-house" target="_blank" rel="noopener noreferrer"><Button colored>GitHub</Button></a>
                      <a href="https://nishi2893.github.io/burger-house" target="_blank" rel="noopener noreferrer"><Button colored>Live Demo</Button></a>
                     </CardActions>
                     <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                     </CardMenu>
                   </Card>

                    {/* Project 2*/}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                   <CardTitle style={{color: '#fff', height: '176px', 
                   background: 'url(https://reactjs.org/logo-og.png) center / cover'}}>
                   My Portfolio
                   </CardTitle>
                   <CardText>
                   This is my portfolio created by using React 16 features and React-MDL which consists of React components for Material Design Lite. <b>My portfolio will soon be hosted on AWS S3.</b>
                   </CardText>
                   <CardActions border>
                      <a href="https://github.com/nishi2893/my-portfolio" target="_blank" rel="noopener noreferrer"><Button colored>GitHub</Button></a>
                      <a href="https://nishigandha-shendkar.firebaseapp.com"><Button colored>Firebase Live Demo</Button></a>
                     </CardActions>
                     <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                     </CardMenu>
                   </Card>
                </div>
            )
        }
        else if(this.state.activeTab === 1)
        {
            return(
                <div className="Projects-grid">
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                   <CardTitle style={{color: 'black', height: '176px', 
                   background: 'url(https://cdn.colorlib.com/wp/wp-content/uploads/sites/2/angular-logo.png) center / cover'}}>
                   div Element Pattern Program
                   </CardTitle>
                   <CardText>
                   divs arranged horizontally creating a pattern with the remaining divs arranged in the middle of the last row.
Click the div to change the colour of the div.
                   </CardText>
                   <CardActions border>
                      <a href="https://github.com/nishi2893/divs-pattern" target="_blank" rel="noopener noreferrer"><Button colored>GitHub</Button></a>
                      <a href="https://divs-pattern.firebaseapp.com/" target="_blank" rel="noopener noreferrer"><Button colored>Firebase Live Demo</Button></a>
                     </CardActions>
                     <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                     </CardMenu>
                   </Card>
                </div>
            )
        }
        else{
            return(
                <div className="Projects-grid">
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                   <CardTitle style={{color: '#fff', height: '176px', 
                   background: 'url(https://reactjs.org/logo-og.png) center / cover'}}>
                   Javascript Project #1
                   </CardTitle>
                   <CardText>
                  <b>Working on the Javascript project. Javascript project will be deployed soon.</b>
                   </CardText>
                   {/* <CardActions border>
                      <Button colored>GitHub</Button>
                      <Button colored>Live Demo</Button>
                     </CardActions> */}
                     <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                     </CardMenu>
                   </Card>
                </div>
            )
        }
          

    }

    render(){
        return(
            <div className="Projects-category">
               <Tabs activeTab={this.state.activeTab} 
               onChange={(tabId) => this.setState({ activeTab: tabId})} ripple>
               <Tab>React</Tab>
               <Tab>Angular 6</Tab>
               <Tab>Javascript</Tab>
               </Tabs>

               <section>
               <Grid >
               <Cell col={12}>
               {this.toggleCategories()}
               </Cell>
               </Grid>
               </section>
            </div>
        )
    }
}

export default Projects;