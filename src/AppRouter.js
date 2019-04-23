import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import About from './components/about/about';
import Home from './components/home/home';
import Gallery from './components/gallery/gallery';
import Profile from './components/profile/profile';
import Quiz from './components/quiz/quiz';
import logo from './img/logo.png'
import './styles/nav.styles.css'

function AppRouter() {
    return (
        <Router>
    <div>
      <div className="header">
      <div className="logo">
      		<img src={logo} alt="logo"/>
      		<span>Perfect</span>	
      		<span className="green">ENGLISH</span>
      		
      		</div>
        <nav className="navigation">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/gallery/">Gallery</Link>
            </li>
            <li>
              <Link to="/about/">About</Link>
            </li>
             <li>
              <Link to="/quiz/">Quiz</Link>
            </li>
            <li>
              <Link to="/profile/">My Profile</Link>
            </li>
          </ul>
        </nav>
							</div>
        <Route path="/" exact component={Home}/>
        <Route path="/gallery/" component={Gallery} /> 
        <Route path="/about/" component={About} /> 
        <Route path="/quiz/" component={Quiz} />        
        <Route path="/profile/" component={Profile} />
      </div>
    </Router>
    );
}

export default AppRouter;