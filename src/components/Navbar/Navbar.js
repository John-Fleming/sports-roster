import React from 'react';
import PropTypes from 'prop-types';
import firebase from 'firebase/app';
import 'firebase/auth';

import './Navbar.scss';

class Navbar extends React.Component {
  static propTypes = {
    authed: PropTypes.bool.isRequired,
  }

  logMeOut = (e) => {
    e.preventDefault();
    firebase.auth().signOut();
  }

  render() {
    const { authed } = this.props;
    return (
      <div className="Navbar">
        <nav className="navbar navbar-expand-lg">
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a className="navbar-brand text-white" href="#">
            {/* eslint-disable-next-line max-len */}
            {/* <img id="nav-logo" src="https://lh3.googleusercontent.com/proxy/TSRGQLDRjEG7ic6n64g3PNNUK-z4ETJEPgNtJUO8uVofkb8FuFJfTbLKh9LTNENC1ge3y6oatF4z47dpxaafpvUhiOtzsS-A_e6Yc9dtRcGLfYlm9o7obkoMrh4-pg" alt="astros-logo"/> */}
            Astros
          </a>
          {
            authed
              ? <button className="nav-link btn btn-light ml-auto" onClick={this.logMeOut}><i className="fas fa-sign-out-alt"></i></button>
              : ''
          }
        </nav>
      </div>
    );
  }
}

export default Navbar;
