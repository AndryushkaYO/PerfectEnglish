import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import About from './components/about/about';
import Home from './components/home/home';
import Gallery from './components/gallery/gallery';
import Profile from './components/profile/profile';
import Quiz from './components/quiz/quiz';
import logo from './img/logo.png'
import './styles/nav.styles.css'
import {onAuthStateChanged } from './components/firebase';
import SignUp from './components/authentication/SignUp';
import SignIn from './components/authentication/SignIn';
import SignOut from './components/authentication/SignOut';

class AppRouter extends Component {
  constructor() {
    super();
    this.state = {
      user : sessionStorage.getItem('isUser')
    }
  }
  
  componentDidMount() {
    onAuthStateChanged(this);
    
  }

  render() {
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
            {
              !this.state.user  ?
              <React.Fragment>
              <li>
                <Link to="/sign-up/">Sign Up</Link>
              </li>
              <li>
                <Link to="/sign-in/">Sign In</Link>
              </li>
              </React.Fragment>            
              : 
              <li>
                <Link to="/sign-out/" > Sign Out</Link>  
              </li>           
            }
          </ul>
        </nav>
							</div>
        <Route path="/" exact component={Home}/>
        <Route path="/gallery/" component={Gallery} /> 
        <Route path="/about/" component={About} /> 
        <Route path="/quiz/" component={Quiz} />        
        <PrivateRoute exact path="/profile/" component={Profile} />
        <Route exact path="/sign-up/" component={SignUp} />
        <Route exact path="/sign-in/" component={SignIn} />
        <Route exact path="/sign-out/" component={SignOut} />
      </div>
    </Router>
    );
  }  
}

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    sessionStorage.getItem('isUser') !== null
      ? <Component {...props} />
      : <Redirect to="/sign-in/" />
  )} />
)

export default AppRouter;