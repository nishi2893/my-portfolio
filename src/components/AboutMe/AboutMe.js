import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import './AboutMe.css';

class AboutMe extends Component{

    render(){
        return(
            <div>
                <Grid>
                    <Cell col={4}>
                    <div style={{textAlign: 'center'}}>
                   <img src="https://t4.ftcdn.net/jpg/01/05/72/55/240_F_105725550_LsQIhnhtWkmUfJ7XMyFWAjTxtmsdlICx.jpg"
                      alt="my resume" />
                   </div>
                   <h3 style={{paddingTop: '2em'}}>Nishigandha Shendkar</h3>
                   <h4 style={{color: 'grey'}}>Programmer</h4>
                   <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                   <p style={{fontSize: '18px'}}>Computer Science graduate student with 1.5 years of professional experience in software development, proficient in web development and database management, actively looking for internship.
</p>
                   <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                  

                    </Cell>
                    <Cell col={8}>
                    <div style={{marginLeft: '15%',align: 'center', padding: '0px'}}>
                    {/* <img style={{width: '700px', height: '150px'}}src=" http://hululu.jp/wp-content/uploads/2018/03/%E5%AF%9F%E3%81%97-1.jpg"
                      alt="about me" /> */}
                      <p>I am passionate and a versatile Software Engineer with 2 years of industry experience in various domains.</p>
                      <p>I am pursuing Master's in Computer Science from California State University, Long beach as well as 
                          working as a Digital Media Communications Student Assistant in the Alumni Relations department. 
                          As a student assistant, I have to maintain CSULB website with the future or ongoing events of the college with the use of 
                          web technologies like Drupal(Content Management System), HTML, CSS and Javascript.
                      </p>
                      <p>In KPIT Technologies, initially I was in the Backend Development team, managing the database of all the employees of KPIT. Then, I was part of IoT development team building projects using Arduino,
                          Raspberry Pi, Amazon web services(AWS), Microsoft Azure as well as developed KPIT Chat Bot using Microsoft Bot Framework.
                            </p>
                            <p>Finally, I was part of the UI Development team working on various web applications like 'Global Mobility Management System', 'Vendor Creation' and many more using AngularJS, JQuery, Bootstrap. While working on these projects, 
                                I developed an interest of learning lastest technologies like Angular 6, React JS, Node JS and many more and started developing small projects which eventually led me to develop large complex projects with all the features. 
                            </p>
                            <p>With my previous excellent academic-based and industry experience, coupled with my enthusiasm and dedication to achieving success showcased with the developed projects, 
                                I believe I could swiftly exceed your expectations as your next Intern. </p>

<p>As a Software Developer, my goal is to continually increase my programming skills in order to present better solutions to my employers and their clients.</p>

                   
                    </div>
                   
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default AboutMe;