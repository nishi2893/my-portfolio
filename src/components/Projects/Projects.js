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
                   <CardTitle style={{color: '#fff', height: '180px', 
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
                   <CardTitle style={{color: '#fff', height: '180px', 
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
                   <CardTitle style={{color: '#fff', height: '180px', 
                   background: 'url(https://i1.wp.com/www.positronx.io/wp-content/uploads/2018/10/angular-7-coming-oct.jpg) center / cover'}}>
                   Blocks Pattern
                   </CardTitle>
                   <CardText>
                   Blocks arranged horizontally and vertically creating a pattern based on the user input. Click the block to change the colour of the block.
                   </CardText>
                   <CardActions border>
                      <a href="https://github.com/nishi2893/blocks-pattern" target="_blank" rel="noopener noreferrer"><Button colored>GitHub</Button></a>
                      <a href="https://nishi2893.github.io/blocks-pattern/" target="_blank" rel="noopener noreferrer"><Button colored>Live Demo</Button></a>
                     </CardActions>
                     <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                     </CardMenu>
                   </Card>

                    {/* Project 2*/}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                   <CardTitle style={{color: '#fff', height: '180px', 
                   background: 'url(https://i.udemycdn.com/course/750x422/1481956_84e7_2.jpg) center / cover'}}>
                   Track My Fitness
                   </CardTitle>
                   <CardText>
                   This application tracks the fitness of the user. This app records the duration of the 
                   workout completed as well as the status like whether the user has completed or cancelled a 
                   given workout. This app displays all the past workouts carried out by the user. The data of the app is stored 
                   in firebase and the state of the app is managed by redux.
                   </CardText>
                   <CardActions border>
                      <a href="https://github.com/nishi2893/track-my-fitness" target="_blank" rel="noopener noreferrer"><Button colored>GitHub</Button></a>
                      <a href="https://nishi2893.github.io/track-my-fitness/" target="_blank" rel="noopener noreferrer"><Button colored>Live Demo</Button></a>
                     </CardActions>
                     <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                     </CardMenu>
                   </Card>
                </div>
            )
        }
        else if(this.state.activeTab === 2){
            return(
                <div className="Projects-grid">
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                   <CardTitle style={{color: '#fff', height: '180px', 
                   background: 'url(https://cdn-images-1.medium.com/max/1600/1*2rbPnwPunmAN4OmGBATduw.jpeg) center / cover'}}>
                   49er Shops Bookstore
                   </CardTitle>
                   <CardText>
                   This bookstore application manages the textbooks of CSULB as well as stores the information 
                   regarding textbooks in MongoDB Atlas.The students can search the textbooks based on the
                   author as well as buy or donate the textbooks to the university bookstore.
                   </CardText>
                   <CardActions border>
                      <a href="https://github.com/nishi2893/49er-shops-bookstore" target="_blank" rel="noopener noreferrer"><Button colored>GitHub</Button></a>
                      <a href="https://bookstore-49er-shops.herokuapp.com/" target="_blank" rel="noopener noreferrer"><Button colored>Heroku Live Demo</Button></a>
                     </CardActions>
                     <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                     </CardMenu>
                   </Card>
                </div>
            )
        }
        else if(this.state.activeTab === 3){
            return(
                <div className="Projects-grid">
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                   <CardTitle style={{color: 'black', height: '180px', 
                   background: 'url(https://journocode.com/wp-content/uploads/2016/06/htmlCssJS-1140x515.jpg) center / cover'}}>
                   RGB Guessing Game
                   </CardTitle>
                   <CardText>
                   The Great RGB Color Guessing Game where the player 
                   has to guess the color from diffrent color panels based on
                   the RGB Color Code. This game has easy as well as hard level which
                   makes it fun to play. This game will increase your knowledge of RGB Color Codes.
                   </CardText>
                   <CardActions border>
                      <a href="https://github.com/nishi2893/rgb-guessing-game" target="_blank" rel="noopener noreferrer"><Button colored>GitHub</Button></a>
                      <a href="https://nishi2893.github.io/rgb-guessing-game/" target="_blank" rel="noopener noreferrer"><Button colored>Live Demo</Button></a>
                     </CardActions>
                     <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                     </CardMenu>
                   </Card>
                </div>
            )
        }
        else
        {
            return(
                <div className="Projects-grid">
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                   <CardTitle style={{color: 'white', height: '170px', 
                   background: 'url(https://www.learntek.org/blog/wp-content/uploads/2018/11/DESIGN-PATTERNS-IN-JAVA.png) center / cover'}}>
                   Pizza Patterns
                   </CardTitle>
                   <CardText>
                   Pizza patterns builds pizza orders on the fly by using factory design pattern
                   and decorator design pattern.
                   </CardText>
                   <CardActions border>
                      <a href="https://github.com/nishi2893/pizza-patterns" target="_blank" rel="noopener noreferrer"><Button colored>GitHub</Button></a>
                      <a href="/" target="_blank" rel="noopener noreferrer"><Button colored disabled>Live Demo</Button></a>
                     </CardActions>
                     <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                     </CardMenu>
                   </Card>

                    {/* Project 2*/}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                   <CardTitle style={{color: 'white', height: '180px', 
                   background: 'url(https://cdn.journaldev.com/wp-content/uploads/2013/07/observer-design-pattern-java.jpg) center / cover'}}>
                   Observer Pattern
                   </CardTitle>
                   <CardText>
                   College football teams of different states of USA rankings are determined by the 
                   voting process. This voting process is implemented by using observer design pattern.
                   </CardText>
                   <CardActions border>
                      <a href="https://github.com/nishi2893/observer-pattern" target="_blank" rel="noopener noreferrer"><Button colored>GitHub</Button></a>
                      <a href="https://nishi2893.github.io/track-my-fitness/" target="_blank" rel="noopener noreferrer"><Button colored disabled>Live Demo</Button></a>
                     </CardActions>
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
               <Tab>React JS</Tab>
               <Tab>Angular 7 / Angular Material</Tab>
               <Tab>Express Node JS / MongoDB</Tab>
               <Tab>Javascript / JQuery</Tab>
               <Tab>Core Java / Advanced Java</Tab>
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