import React from 'react';

import './Roster.scss';

import playerData from '../../helpers/data/playerData';
import authData from '../../helpers/data/authData';

import Player from '../Players/Players';
import PlayerForm from '../PlayerForm/PlayerForm';

class Roster extends React.Component {
  state = {
    players: [],
    formOpen: false,
  }


  getTeam = () => {
    playerData.getPlayersByUid(authData.getUid())
      .then((players) => this.setState({ players }))
      .catch((err) => console.error('could not get players: ', err));
  }

  componentDidMount() {
    this.getTeam();
  }

  removePlayer = (playerId) => {
    playerData.deletePlayer(playerId)
      .then(() => this.getTeam())
      .catch((err) => console.error('unable to delete player', err));
  }

  addPlayer = (newPlayer) => {
    playerData.createNewPlayer(newPlayer)
      .then(() => {
        this.getTeam();
        this.setState({ formOpen: false });
      })
      .catch((err) => console.error('could not add new player: ', err));
  }

  render() {
    const { players, formOpen } = this.state;
    const makePlayers = players.map((player) => <Player key={player.id} player={player} removePlayer={this.removePlayer}/>);
    return (
      <div className="Roster">
        <h2>Astros' Roster</h2>
        <button className="btn btn-light" onClick={() => this.setState({ formOpen: true })}><i className="fas fa-plus"></i></button>
        { formOpen ? <PlayerForm addPlayer={this.addPlayer} /> : ''}
        <div className="d-flex flex-wrap mt-2">
          {makePlayers}
        </div>
      </div>
    );
  }
}

export default Roster;
