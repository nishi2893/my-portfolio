import React, { Component } from 'react';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import './App.css';
import Home from './components/Home';
import {NavLink} from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
    <Layout>
        <Header className="App-header" title={<NavLink
            style={{textDecoration: 'none', color:'white'}} to="/"> Nishigandha Shendkar
        </NavLink>} scroll>
            <Navigation>
                <NavLink style={{fontSize: '18px'}} to="/resume">Resume</NavLink>
                <NavLink style={{fontSize: '18px'}} to="/projects">Projects</NavLink>
                <NavLink style={{fontSize: '18px'}} to="/aboutme">About Me</NavLink>
                <NavLink style={{fontSize: '18px'}} to="/contact">Contact</NavLink>
            </Navigation>
        </Header>
        <Drawer title={<NavLink
            style={{textDecoration: 'none', color:'black'}} to="/"> My Portfolio
        </NavLink>}>
            <Navigation>
            <NavLink style={{fontSize: '16px'}} to="/resume">Resume</NavLink>
                <NavLink style={{fontSize: '16px'}} to="/projects">Projects</NavLink>
                <NavLink style={{fontSize: '16px'}} to="/aboutme">About Me</NavLink>
                <NavLink style={{fontSize: '16px'}} to="/contact">Contact</NavLink>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
           
            <Home />
        </Content>
    </Layout>
</div>
    );
  }
}

export default App;
