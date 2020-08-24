import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import './App.scss';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Resume from './Pages/Resume/Resume';
import Projects from './Pages/Projects/Projects';
import ContactUs from './Pages/ContactUs/ContactUs';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
// home
// about
// resume
// projects
// contact us

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/About' component={About} />
        <Route path='/Resume' component={Resume} />
        <Route path='/Projects' component={Projects} />
        <Route path='/ContactUs' component={ContactUs} />
       
      </Switch>
    </Router>
  );
}

export default App;
