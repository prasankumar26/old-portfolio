import React from 'react'
import './Footer.scss'
import {Link} from 'react-router-dom'

function Footer() {
    return (
        <>
            <footer>
          <div className="container-fluid">
          <div className="row text-center">
            <div className="col-md-3 col-6">
                <div className="footer-one">
                    <h5>WEBSITE DESIGN</h5>
                    <ul>
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
                    <ul>
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
                    <ul>
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
               <h5>SOCIAL MEDIA</h5>
                    <ul>
                        <li> <Link to="/">FACEBOOK</Link> </li>
                        <li> <Link to="/About">INSTAGRAM</Link> </li>
                        <li> <Link to="/Resume">LINKEDIN</Link> </li>
                        <li> <Link to="/Projects">REDDIT</Link> </li>
                        <li> <Link to="/ContactUs">PINTEREST</Link> </li>
                    </ul>
                </div>
                </div>  
            </div>    
          </div>  
          </footer>


        </>
    )
}

export default Footer
