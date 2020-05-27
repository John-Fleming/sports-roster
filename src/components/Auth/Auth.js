import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

import './Auth.scss';

class Auth extends React.Component {
  loginClickEVent = (e) => {
    e.preventDefault();
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
  }

  render() {
    return (
      <div className="Auth my-2">
        <button className="btn btn-light" onClick={this.loginClickEVent}><i className="fab fa-google"></i></button>
      </div>
    );
  }
}

export default Auth;
