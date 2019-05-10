import React from 'react';
import { auth } from '../firebase';
import { BrowserRouter as Redirect } from "react-router-dom";

class SignOut extends React.Component {
    signOut = () => {
      auth.doSignOut()
        .then(response => {
          console.log('successfully signed out', response);
          sessionStorage.setItem('isUser', null);
          
        })
        .catch(err => {
          console.log('failed to sign out', err);
        });
    };
  
    componentDidMount() {
      this.signOut();
    }
  
    render() {
      return <Redirect to='/' />;
    }
}

export default SignOut;