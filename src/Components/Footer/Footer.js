import React from 'react'
import './Footer.scss'
import {Link} from 'react-router-dom'

function Footer() {
    return (
        <>
            <footer className="mx-auto mt-5">
          <div className="container-fluid">
          <div className="row">
            <div className="col-md-3 col-6">
                <div className="footer-one">
                    <h5>WEBSITE DESIGN</h5>
                    <ul >
                        <li> <Link to="/">Home</Link> </li>
                        <li> <Link to="/About">About</Link> </li>
                        <li> <Link to="/Resume">Resume</Link> </li>
                        <li> <Link to="/Projects">Projects</Link> </li>
                        <li> <Link to="/ContactUs">Contact Us</Link> </li>
                    </ul>
                </div>
            </div>
            <div className="col-md-3 col-6">
               <div className="footer-one">
               <h5>CLONE PROJECTS</h5>
                    <ul>
                        <li> 
                         <a href="https://clone-project-8bf75.web.app" target="blank">AMAZON CLONE</a> </li>
                        <li> <a href="https://clone-project-8bf75.web.app" target="blank">MESSENGER CLONE</a> </li>
                        <li> <a href="https://clone-project-8bf75.web.app" target="blank">TODO-APP CLONE</a> </li>
                        <li> <a href="https://clone-project-8bf75.web.app" target="blank">TWITTER CLONE</a> </li>
                        <li> <a href="https://clone-project-8bf75.web.app" target="blank">SLACK CLONE</a> </li>
                       
                    </ul>
                </div>

            </div>
            <div className="col-md-3 col-6">
               <div className="footer-one">
               <h5>CLONE PROJECTS</h5>
                    <ul>
                    <li> <a href="https://clone-project-8bf75.web.app" target="blank">AMAZON CLONE</a> </li>
                        <li> <a href="https://clone-project-8bf75.web.app" target="blank">MESSENGER CLONE</a> </li>
                        <li> <a href="https://clone-project-8bf75.web.app" target="blank">TODO-APP CLONE</a> </li>
                        <li> <a href="https://clone-project-8bf75.web.app" target="blank">TWITTER CLONE</a> </li>
                        <li> <a href="https://clone-project-8bf75.web.app" target="blank">SLACK CLONE</a> </li>
                    </ul>
                </div>

            </div>
            <div className="col-md-3 col-6">
               <div className="footer-one">
               <h5>SOCIAL MEDIA</h5>
                    <ul>
                        <li>  <i className="fa fa-facebook"></i> 
                         <a href="https://www.facebook.com/profile.php?id=100051320572049">FACEBOOK</a> </li>
                        
                        <li>  <i className="fa fa-youtube"></i>
                         <a href="https://www.youtube.com/channel/UC71aM-L_xzUuKqFuWSvCJmg?view_as=subscriber">YOUTUBE</a> </li>

                         <li> <i className="fa fa-twitter"></i>
                        <a href="https://twitter.com/MakeMon79968496">TWITTER</a> </li>

                        <li> <i className="fa fa-reddit"></i> 
                        <a href="https://www.reddit.com/user/MakeMoneywithrauls/comments/he8ur7/if_youwant_earn_money_tip_follow_me/">REDDIT</a> </li>

                        <li>  <i className="fa fa-pinterest-p"></i>
                        <a href="https://www.pinterest.it/earnonlinecash/boards/">PINTEREST</a> </li>
                    </ul>
                </div>
                </div>  

                <div className="text-center mx-auto footer-last">
                <p className="text-white" style={{color: '#FC9E4F'}}> &copy; All Rights Reserved By @ Prasan Kumar </p>
                </div>


            </div>    
          </div>  
          </footer>


        </>
    )
}

export default Footer
