import React from 'react';

import './Roster.scss';

import playerData from '../../helpers/data/playerData';
import authData from '../../helpers/data/authData';

import Player from '../Players/Players';

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
    const { players } = this.state;
    const makePlayers = players.map((player) => <Player key={player.id} player={player}/>);
    return (
      <div className="Roster">
        <h2>Astros' Roster</h2>
        <div className="d-flex flex-wrap mt-2">
          {makePlayers}
        </div>
      </div>
    );
  }
}

export default Roster;
