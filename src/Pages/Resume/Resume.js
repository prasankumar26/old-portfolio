import React from 'react'
import './Resume.scss';
import SocialMedia from '../../Socialmedia/SocialMedia';


function Resume() {
  return (
    <>
     <div className="home-parent container-fluid">
     <div className="row">
       <div className="col-md-6">
       <h1 className="resume"></h1>
       </div>
       <div className="col-md-6 text-white my-auto">
         <h2 className="banner-heading">I am Prasan Kumar</h2>
         <h2>Front End Developer</h2>
       <h4>viratprasan14@gmail.com</h4>
         <p>Front-end web development, also known as client-side development is the practice of producing HTML, CSS and JavaScript for a website or Web Application so that a user can see and interact with them directly.</p>
         <div className="banner-btn">
         
             <button className="btn">Download Resume</button> 
          
          </div>
       </div>
     </div>
    </div> 



      
      <div className="container my-5">

      <SocialMedia/>
      
        <div className="row">
          <div className="resume-one">
            <h2>SUMMERY</h2>
            <p>Meticulous web developer with over 2 years of front end experience and passion for responsive website design and a firm believer in the mobile-first approach. W3C certified. Implemented new responsive website approach which increased mobile traffic by 20%.
        </p>
          </div>
        </div>
      </div>


      <div className="container my-5">
        <div className="row">
          <div className="resume-one">
            <h2>Resume Objective</h2>
            <p>Recent bachelor's degree recipient with a background in web design and development. W3C web developer certification. Over 3 years of experience working on personal blogs, taking one from 1,000 monthly visitors to 50,000 visitors per month in just 1 year. Seeking to become the next front end developer for Jameson Communications.

        </p>
          </div>
        </div>
      </div>




   
   <div className="container-fluid">
     <div className="row">
       <div className="col-md-6 my-5">
         <div className="resume-two">
      <h3>Front End Developer</h3>
           <p>June 2019 – July 2020</p>
           <p>DigitallZilla @ Bangalore</p>
     <h3>Key Qualifications & Responsibilities</h3>
         
             <li>Implemented websites, mobile applications, and landing pages from concept through deployment.</li>
             <li>Standardized all output with a new, responsive, mobile-first approach and strategy.</li>
             <li>Assessed UX and UI designs for technical feasibility.</li>
             <li>Developed standard and ad hoc reports in graph format as required.</li>
             <li>Collaborated with product team members to implement new feature developments.</li>
             <h3>Key Achievements</h3>
             <li>Implemented new responsive, mobile-first approach which increased mobile traffic by 20%.</li>
          
         </div>
       </div>
       <div className="col-md-6 my-5">
 
       <div className="resume-two-right">
         <h3>EDUCATION DETAILS :</h3>
         <p>I compleated my  (B.C.A.) - Bachelor Of Computer Applications In M.G.R Arts and Science College Hosur in 2019.</p>
         <h3>Relevant Coursework in college:</h3>
         <p>Computer Fundamentals, Web Development, Typography, Web Design,REACT-JS,HTML-5,CSS-3,JAVASCRIPT,J-QUERY,BOOTSTRAP,SEO,MONGO DB,
         Database Management Systems, Object-Oriented Programming, Web Architecture, Mobile Application Development. 
         </p>
       </div>
       <div className="resume-two-right">
         <h3>Certifications :</h3>
        <li>Front End Web Developer Certification by W3C (edX)</li>
        <li>Pluralsight Front End Web Development Certification</li>
        <li>Front-End Web UI Frameworks and Tools: Bootstrap 4</li>
        <li>General Assembly Web Development Certification</li>
       </div>

       </div>
     </div>
   </div>










     <div className="container">
       <div className="row">
         <div className="col-md-6 my-5">
           <div className="resume-three">
             <h3>PROGRAMMING SKILLS</h3>
             <li>HyperText Markup Language (HTML)</li>
             <li>Cascading Style Sheets (CSS)</li>
             <li>JavaScript (JS)</li>
             <li>JavaScript (JS) Libraries (e.g., jQuery)</li>
             <li>CSS Frameworks ( Bootstrap)</li>
             <li>JavaScript Frameworks ( React Js)</li>
             <li>CSS Preprocessors (e.g., Sass, LESS)</li>
             <li>Version Control (e.g., Git, Subversion, Mercurial)</li>
             <li>Responsive Design & Mobile-First Websites</li>
             <li>Search Engine Optimization (SEO)</li>
           </div>
         </div>
         <div className="col-md-6 my-5">
         <div className="resume-three">
         <h3>COMPUTER SKILLS</h3>
             <li>Microsoft (Excel)</li> 
             <li>Microsoft (Word)</li> 
             <li>Photoshop</li> 
          </div>

          <div className="resume-three">
         <h3>Front End Skills </h3>
             <li>Creating web and mobile applications </li> 
             <li>Maintaining, optimizing, troubleshooting, and improving websites </li> 
             <li>Implementation of apps and landing pages from concept through deployment </li> 
          </div>

         </div>
       </div>
     </div>






















{/* 
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6">
        <div className="resume-one my-5">
        <h3>EDUCATION DETAILS :</h3>
        <p>I compleated my  (B.C.A.) - Bachelor Of Computer Applications In M.G.R Arts and Science College Hosur in 2019.</p>

        
        <h3>EMPLOYMENT DETAILS :</h3>
        <p>I have more than 1 year experience in Front-End-Development. and I love Programming, I have Excellent Programming Skills and I love to create Web Applications using React-JS.  </p>

    
      </div>
        </div>
        <div className="col-md-6">
        <div className="resume-two my-3 px-4">
    <h3>PROGRAMMING SKILLS :</h3>
       <ul>
         <li>CSS-3</li>
         <li>HTML-5</li>
         <li>BOOTSTRAP-4</li>
         <li>J-QUERY</li>
         <li>SEO</li>
         <li>JAVASCRIPT</li>
         <li>REACT JS</li>
         <li>MONGO DB</li>
       </ul>
       </div>
        </div>
      </div>
      
     
      
    </div>
 */}

  
    


     </>

  )
}

export default Resume
