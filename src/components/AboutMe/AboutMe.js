import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import img from '../../assets/images/myprofile.png';
import './AboutMe.css';

class AboutMe extends Component{

    render(){
        return(
            <div>
                <Grid>
                    <Cell col={4}>
                    <div style={{textAlign: 'center'}}>
                   <img src={img} alt="my resume" />
                   </div>
                   <h3 style={{paddingTop: '2em'}}>Nishigandha Shendkar</h3>
                   <h4 style={{color: 'grey'}}>Programmer</h4>
                   <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                   <p style={{fontSize: '18px'}}>Computer Science graduate student proficient in web development and database management, 
                   actively looking for  full-time opportunities.
</p>
                   <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                  

                    </Cell>
                    <Cell col={8}>
                    <div style={{marginLeft: '15%',align: 'center', padding: '0px'}}>
                    {/* <img style={{width: '700px', height: '150px'}}src=" http://hululu.jp/wp-content/uploads/2018/03/%E5%AF%9F%E3%81%97-1.jpg"
                      alt="about me" /> */}
                      <p>I enjoy being challenged and engaging with projects that require me
                          to work outside my comfort and knowledge set, as continuing to learn 
                          new languages and development techniques are important to me and the 
                          success of your organization.
                      </p>
                      <p>I hold a Bachelor's degree in Computer Engineering, Master's degree in Computer Science, 
                          and I also have around 2 years of software engineering experience 
                          at KPIT Technologies Limited.</p>
                      <p>While I was pursuing Master's in Computer Science, I worked as a Digital Media Communications Student Assistant in the Alumni Relations department. 
                          As a student assistant, I developed, updated CSULB Alumni website with new and engaging content by using
                          Drupal Content Management System.   
                      </p>
                      <p>During my previous role at KPIT, I was in the Backend Development team, optimizing
                          and redesigning the database of all the employees of KPIT. 
                          Then, I was part of the IoT team building projects using Arduino,
                          Raspberry Pi, Amazon web services(AWS), Microsoft Azure Cognitive Services.
                            </p>
                            <p>I designed the front end of various web applications by using
                                HTML/CSS, Angular JS, React JS, PHP, JQuery, Bootstrap as well as 
                                created web services using Node JS, Express JS.  
                                So, overall I have hands-on experience in front end as well as back end technologies 
                                 to create and implement software applications, 
                                 I am confident I will be an asset to your organization. 
                            </p>
                            <p>With my previous excellent academic-based and industry experience, coupled with my enthusiasm and dedication to achieving success showcased with the developed projects, 
                                I believe I could swiftly exceed your expectations.</p>
                   
                    </div>
                   
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default AboutMe;