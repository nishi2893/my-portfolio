import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Profile from './Profile/Profile';
import Contact from './Contact/Contact';
import Projects from './Projects/Projects';
import Resume from './Resume/Resume';
import AboutMe from './AboutMe/AboutMe';

const home = () => (
    <Switch>
       <Route path="/" exact component={Profile} />
       <Route path="/aboutme" component={AboutMe}/>
       <Route path="/resume" component={Resume} />
       <Route path="/projects" component={Projects} />
       <Route path="/contact" component={Contact} />
      
    </Switch>

)

export default home;