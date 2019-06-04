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
                   endYear={2019}
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
                   endDate="May' 19"
                   employer="California State University, Long Beach"
                   employeeRole ="Role: Digital Media Communications Student Assistant"
                   />
                    <ul>
               <li><p>Created, coordinated , scheduled e-communiques  by using email marketing softwares, piloted email requests from campus colleges and departments. </p></li>
               <li><p>Developed, updated CSULB Alumni website with new and engaging content by using Drupal(CMS).</p></li>
               <li><p>Implemented search algorithms for searching with different keywords for CSULB Golden Graduates website.</p></li>
               <li><p>Improved existing shopping cart functions for Alumni Special Events.</p></li>
               <li><p><b>Technologies used:</b> HTML5, CSS3, JavaScript, PHP, Drupal Content Management System</p></li>
               <li><p><b>e-blast client:</b> Vertical Response, Mail chimp, Constant Contact</p></li>
           </ul>
           <Experience startDate="Jan' 16"
                   endDate="Jul' 17"
                   employer="KPIT Technologies Limited, India"
                   employeeRole ="Role: Software Engineer, Development"
                   />
                   <ul>
                       <li><p>Developed the user interface of web applications named 'Global Mobility Management System' , 'Offer Letter', 'Vendor Creation' using Angular JS for front end and Node JS for web services.</p></li>
                       <li><p>Developed "KPIT Digital Mirror" which displays KPIT related news updates, weather forecast,
                           current time, date on a smart mirror by using Angular JS for front end powered by
                           Raspberry Pi 3 coded in Linux, Python.
                           </p></li>
                       <li><p>Developed KPIT Chat Bot by using Microsoft Bot Framework and KPIT Digital Tree using Angular JS for Cisco Road Show.</p></li>
                       <li><p>Created and managed database for all the employees of KPIT for GMMS web application.</p></li>
                       <li><p>Created and optimized stored procedures, triggers, mySQL queries and 
                           redesigned KPIT employee's database.</p></li>
                       <li><p><b>Technologies used:</b> Angular JS , Node JS , Express JS, 
                       Bootstrap, MySQL , JQuery , HTML5/CSS3 , Bot Framework , Microsoft Azure Cognitive Services,
                        Amazon Web Services, IoT devices, Git, SVN.</p></li>
                   </ul>
                    <hr />
                    <h2>Technical Skills</h2>
                    <Skills technicalskill="Java/Advanced Java" progress={90}/>
                    <Skills technicalskill="C / C++" progress={60}/>
                    <Skills technicalskill="HTML5/CSS3/Bootstrap/JQuery" progress={70}/>
                    <Skills technicalskill="Javascript" progress={80}/>
                    <Skills technicalskill="ReactJS" progress={80}/>
                    <Skills technicalskill="NodeJS" progress={70}/>
                    <Skills technicalskill="Angular 7" progress={70}/>
                    <Skills technicalskill="TypeScript" progress={70}/>
                    <Skills technicalskill="MySQL" progress={70}/>
                   </Cell>
               </Grid>
            </div>
        )
    }
}

export default Resume;