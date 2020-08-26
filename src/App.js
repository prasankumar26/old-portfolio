import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import './App.scss';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Resume from './Pages/Resume/Resume';
import Projects from './Pages/Projects/Projects';
import ContactUs from './Pages/ContactUs/ContactUs';
import Error from './Error';
import {Helmet} from 'react-helmet'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Footer from './Components/Footer/Footer';
// home
// about
// resume
// projects
// contact us

function App() {
  return (
    <>
   <Helmet>
      <meta charset="UTF-8" />
      <title>Prasan Portfolio</title>
      <link rel="canonical" href="http://mysite.com/example" />
      <meta name="description" content="Nested component" />
      <meta property="og:type" content="article" />
      <meta name="author" content="John Doe"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
     </Helmet>
    <Router>
    
      <Navbar />
      <Switch>
       
        <Route path='/' exact component={Home} />
        <Route path='/About' component={About} />
        <Route path='/Resume' component={Resume} />
        <Route path='/Projects' component={Projects} />
        <Route path='/ContactUs' component={ContactUs} />
        <Route component={Error} />
         </Switch>
         <Footer/>
    </Router>
    </>
  );
}

export default App;
