import React from 'react'
import './Home.scss';
import {Link} from 'react-router-dom'
import Skills from './Skills';


function Home() {
  return (
    <>
    <div className="home-parent container-fluid">
     <div className="row">
       <div className="col-md-6">
       <h1 className="home"></h1>
       </div>
       <div className="col-md-6 text-white my-auto">
         <h2 className="banner-heading">I am Prasan Kumar</h2>
         <h2>Front End Developer</h2>
         <p>Front-end web development, also known as client-side development is the practice of producing HTML, CSS and JavaScript for a website or Web Application so that a user can see and interact with them directly.</p>
         <div className="banner-btn">
          <Link to="/Resume"> <button className="btn">View More</button> </Link> 
          </div>
       </div>
     </div>
    </div>



   <div className="container-fluid">
     <div className="skills-heading mx-auto mt-5 mb-5">
     <h2 className="text-center">My Skills</h2>
     </div>
    
     <div className="row">
    
     <Skills 
     name="HTML- 5"
     description="Hypertext Markup Language (HTML) is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript. ... HTML elements are the building blocks of HTML pages."
     percentage="98 %"
     />
    
     <Skills 
     name="CSS- 3"
     description="CSS stands for Cascading Style Sheets. CSS describes how HTML elements are to be displayed on screen, paper, or in other media. CSS saves a lot of work. It can control the layout of multiple web pages all at once. External stylesheets are stored in CSS files.
     "
     percentage="96 %"
     />
    
     <Skills 
     name="JAVASCRIPT"
     description="JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm. It has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions."
     percentage="80 %"
     />
    
     <Skills 
     name="BOOTSTRAP- 4"
     description="Bootstrap 4 is the newest version of Bootstrap, which is the most popular HTML, CSS, and JavaScript framework for developing responsive, mobile-first websites. Bootstrap 4 is completely free to download and use!"
     percentage="98 %"
     />
    
     <Skills 
     name="J-QUERY"
     description="JQuery is a JavaScript library designed to simplify HTML DOM tree traversal and manipulation, as well as event handling, CSS animation, and Ajax. It is free, open-source software using the permissive MIT License. As of May 2019, jQuery is used by 73% of the 10 million most popular websites."
     percentage="60 %"
     />
    
     <Skills 
     name="REACT-JS"
     description="React is an open-source JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications."
     percentage="60 %"
     />
     
     <Skills 
     name="GIT- Version-Control"
     description="Git is a distributed version-control system for tracking changes in source code during software development. It is designed for coordinating work among programmers, but it can be used to track changes in any set of files. Its goals include speed, data integrity, and support for distributed, non-linear workflows. "
     percentage="60 %"
     />
     <Skills 
     name="PHOTOSHOP"
     description="Adobe Photoshop is a raster graphics editor developed and published by Adobe Inc. for Windows and macOS. It was originally created in 1988 by Thomas and John Knoll. Since then, the software has become the industry standard not only in raster graphics editing, but in digital art as a whole."
     percentage="60 %"
     />
     <Skills 
     name="SEO"
     description="Search engine optimization is the process of growing the quality and quantity of website traffic by increasing the visibility of a website or a web page to users of a web search engine. SEO refers to the improvement of unpaid results and excludes direct traffic and the purchase of paid placement."
     percentage="60 %"
     />

  
     </div>
   </div>






    {/* 3rd bg img  */}

    <div className="container-fluid">
      <div className="home-bg-img"></div>
    </div>







        <div className="container">
          <div className="home-four">
            <h2> WEBSITES AND WEB-APPLICATIONS</h2>
            <p>A web developer is a programmer who specializes in, or is specifically engaged in, the development of World Wide Web applications using a client–server model.</p>
           
            <p>React is an open-source JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications.</p>
           
          </div>
          <div className="row mt-4">
           <div className="col-md-6 mb-4">
              <div className="home-four-img">
               <img src="/prasan-imges/home-2.jpg" className="img-fluid" alt="d"/>
              </div>
            </div>
            <div className="col-md-6 my-auto">
              <div className="home-four-content">
              <h2>WEB DESIGNING</h2>
              <p>Web design encompasses many different skills and disciplines in the production and maintenance of websites. The different areas of web design include web graphic design; interface design; authoring, including standardised code and proprietary software; user experience design; and search engine optimization.</p>
              </div>
            </div>
         </div>

          <div className="row mt-4 d-flex flex-row-reverse">
           <div className="col-md-6 mb-5">
              <div className="home-four-img">
               <img src="/prasan-imges/home-3.jpg" className="img-fluid" alt="d"/>
              </div>
            </div>
            <div className="col-md-6 my-auto">
              <div className="home-four-content">
              <h2>WEB DEVELOPER</h2>
              <p>Web developers are found working in various types of organizations, including large corporations and governments, small and medium-sized companies, or alone as freelancers. Some web developers work for one organization as a permanent full-time employee, while others may work as independent consultants, or as contractors for an agency or at home personal use. Web developers typically handle both server-side and front-end logic.</p>
              </div>
            </div>
         </div>

        </div>


   
        <div className="container-fluid">
         
          <div className="row mt-4">
           <div className="col-md-6 mb-4">
              <div className="home-four-img">
               <img src="/prasan-imges/home-4.jpg" className="img-fluid" alt="d"/>
              </div>
            </div>
            <div className="col-md-6 my-auto">
              <div className="home-four-content">
              <h2>FRONT-END-ENGINEER</h2>
              <p>Front-end web development, also known as client-side development is the practice of producing HTML, CSS and JavaScript for a website or Web Application so that a user can see and interact with them directly.</p>
              </div>
            </div>
         </div>

          <div className="row mt-4 d-flex flex-row-reverse">
           <div className="col-md-6 mb-5">
              <div className="home-four-img">
               <img src="/prasan-imges/home-5.jpg" className="img-fluid" alt="d"/>
              </div>
            </div>
            <div className="col-md-6 my-auto">
              <div className="home-four-content">
              <h2>REACT-JS EXPERT</h2>
              <p>React. js Developers design and implement user interface components for JavaScript-based web and mobile applications using the React open source library ecosystem. These skilled front-end developers are involved in all stages of interface component design, from conception through to final testing.</p>
              </div>
            </div>
         </div>

        </div>


   
     



    </>
  )
}

export default Home
