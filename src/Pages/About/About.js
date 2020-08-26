import React from 'react'
import './About.scss';
import SocialMedia from '../../Socialmedia/SocialMedia';
import AboutData from './AboutData';
import {Helmet} from 'react-helmet'


function About() {
  return (
    <>

<Helmet>
   {/* html attributes */}
   <html lang="en" amp />
 
      <meta charset="UTF-8" />
      <title>Prasan Portfolio</title>
      <meta keywords="hello" />
      <link rel="canonical" href="http://mysite.com/example" />
      <meta name="description" content="Nested component" />
      <meta property="og:type" content="article" />
      <meta name="author" content="John Doe"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

     </Helmet>


    <div>
      <h1 className="about">About Us</h1>
    </div>


    <div className="container">
      <SocialMedia/>
    </div>
   
    <div className="container-fluid">
         
         <div className="row mt-4">
         <AboutData
          ImgUrl="/prasan-imges/prasan-5.jpg"
          AboutName="WHO I AM ?"
          AboutDescription="I Am Prasan Kumar, Studied At M.G.R Arts & Science College Hosur
          and I Like Programming."
          />
       </div>


         <div className="row  d-flex flex-row-reverse mt-4">
         <AboutData
          ImgUrl="/prasan-imges/prasan-2.jpg"
          AboutName="FRONT-END-ENGINEER"
          AboutDescription="Front-end web development, also known as client-side development is the practice of producing HTML, CSS and Reat Js for a website or Web Application so that a user can see and interact with them directly."
          />
       </div>


       <div className="row mt-4">
         <AboutData
          ImgUrl="/prasan-imges/prasan-3.jpg"
          AboutName="WORK EXPERIENCE"
          AboutDescription="JUNE - 2019 to JULY - 2020 Worked at DigitalZilla Company at Bangalore"
          />
       </div>


       <div className="row  d-flex flex-row-reverse mt-4">
         <AboutData
          ImgUrl="/prasan-imges/prasan-1.jpg"
          AboutName="RELEVANT COURSEWORK IN COLLEGE:"
          AboutDescription="Computer Fundamentals, Web Development, Typography, Web Design,REACT-JS,HTML-5,CSS-3,JAVASCRIPT,J-QUERY,BOOTSTRAP,SEO,MONGO DB, Database Management Systems, Object-Oriented Programming, Web Architecture, Mobile Application Development."
          />
       </div>





       </div>




    </>
  )
}

export default About
