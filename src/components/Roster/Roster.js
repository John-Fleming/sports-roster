import React from 'react';

import './Roster.scss';

import playerData from '../../helpers/data/playerData';
import authData from '../../helpers/data/authData';

class Roster extends React.Component {
  state = {
    players: [],
  }

  componentDidMount() {
    console.error('uid', authData.getUid());
    playerData.getPlayersByUid(authData.getUid())
      .then((players) => this.setState({ players }))
      .catch((err) => console.error('could not get players: ', err));
  }

  render() {
    return (
      <div className="Roster">
        <h2>Astros' Roster</h2>
      </div>
    );
  }
}

export default Roster;
