import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import './Resume.css';
import Education from '../Education/Education';
import Experience from '../Experience/Experience';
import Skills from '../Skills/Skills';

class Resume extends Component{

    render(){
        return(
            <div>
               <Grid>
                  
                   <Cell col={12} className="Resume-right-col">
                   <h2>Education</h2>

                   <Education startYear={2017}
                   endYear="Currently Pursuing"
                   schoolName="California State University, Long Beach"
                   schoolDescription="Master's in Computer Science"
                   />

                   <Education startYear={2011}
                   endYear={2015}
                   schoolName="Pune Institute of Computer Technology, Pune University"
                   schoolDescription="Bachelor of Engineering in Computer Science"
                   />
                   <hr />
                   <h2>Professional Experience</h2>
                   <Experience startDate="Jan' 18"
                   endDate="Currently working"
                   employer="California State University, Long Beach"
                   employeeRole ="Role: Digital Media Communications Student Assistant"
                   />
                    <ul>
               <li><p>Building e-blasts by communicating with staff and campus departments using provided content as well as tracking and analyzing data from the blasts.</p></li>
               <li><p>Maintaining Drupal -based website of CSULB.</p></li>
               <li><p><b>Technologies used:</b> HTML, CSS, JavaScript, Drupal</p></li>
               <li><p><b>e-blast client:</b> Vertical Response, Mail chimp.</p></li>
           </ul>
           <Experience startDate="Jan' 16"
                   endDate="Jul' 17"
                   employer="KPIT Technologies Limited, India"
                   employeeRole ="Role: Software Engineer, Development"
                   />
                   <ul>
                       <li><p>Developed the user interface of web applications named 'Global Mobility Management System' , 'Offer Letter', 'Vendor Creation' using Angular JS for front end and Node JS for web services.</p></li>
                       <li><p>Developed the user interface of KPIT Digital Mirror using Angular JS by displaying real time data like surrounding temperature , current time by reading the values from various sensor as well as displayed the information of the company on a smart mirror by working in the IOT domain.</p></li>
                       <li><p>Developed KPIT Chat Bot by using Microsoft Bot Framework and KPIT Digital Tree using Angular JS for Cisco Road Show.</p></li>
                       <li><p>Created and managed database for all the employees of KPIT for GMMS web application.</p></li>
                       <li><p>Created stored procedures and triggers by using PL/SQL as well as performed CRUD operations using MySQL for GMMS web application.</p></li>
                       <li><p><b>Technologies used:</b>  Angular JS , Node JS , Bootstrap, MySQL , JQuery , HTML5 , Bot Framework , Microsoft Azure , Amazon Web Services. </p></li>
                   </ul>
                    <hr />
                    <h2>Technical Skills</h2>
                    <Skills technicalskill="Java/Advanced Java" progress={90}/>
                    <Skills technicalskill="HTML5/CSS3/Bootstrap" progress={80}/>
                    <Skills technicalskill="Javascript" progress={80}/>
                    <Skills technicalskill="ReactJS" progress={70}/>
                    <Skills technicalskill="NodeJS" progress={20}/>
                    <Skills technicalskill="Angular 6" progress={40}/>
                    <Skills technicalskill="MySQL" progress={70}/>
                   </Cell>
               </Grid>
            </div>
        )
    }
}

export default Resume;