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
            <img id="nav-logo" src="https://lh3.googleusercontent.com/proxy/H4zmFLAnfvgn93U0anTsQu3tJI82U7iPRvIipkFQ8FplFs2dH-seI3fwGoQtABHpH0d-XwzhDcD_Etxvu0qM4oD8kRC6i_JPgMCMCsxajxaDT-e5nSnmG1e8ILXj-A" alt="astros-logo"/>
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
