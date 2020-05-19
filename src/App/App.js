import React from 'react';

import Navbar from '../components/Navbar/Navbar';
import Auth from '../components/Auth/Auth';
import Roster from '../components/Roster/Roster';

import './App.scss';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Auth />
        <Roster />
      </div>
    );
  }
}

export default App;
