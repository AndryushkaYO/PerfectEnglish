import React from 'react';
import { withRouter } from 'react-router-dom';
import { State } from 'react-powerplug';
import { auth } from '../firebase';

class SignOut extends React.Component {
  handleSignOut = () => {
    return auth
     .doSignOut()
            .then(response => {
              console.log('successfully signed out', response);
              sessionStorage.removeItem('isUser');
              this.props.history.push('/');
              
            })
            .catch(err => {
              console.log('failed to sign out', err);
            });
  };

  render() {
    return (
      <State>
        {this.handleSignOut()}
      </State>
    );
  }
}

export default withRouter(SignOut);
