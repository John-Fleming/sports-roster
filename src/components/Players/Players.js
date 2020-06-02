import React from 'react';
import PropTypes from 'prop-types';
import './Players.scss';
import playerShape from '../../helpers/propz/playerShape';

class Player extends React.Component {
  static propTypes = {
    player: playerShape.playerShape,
    removePlayer: PropTypes.func.isRequired,
  }

  deletePlayerEvent = (e) => {
    e.preventDefault();
    const { player, removePlayer } = this.props;
    removePlayer(player.id);
  }

  editPlayerEvent = (e) => {
    e.preventDefault();
    const { player, editAPlayer } = this.props;
    editAPlayer(player);
  }

  render() {
    const { player } = this.props;
    return (
        <div className="Player card my-3">
          <div className="header-photo-container">
            <img className="card-img-top header-photo" src="https://upload.wikimedia.org/wikipedia/commons/0/01/Houston_astros_logo.png" alt="Player" />
          </div>
        <img className="player-photo" src={player.imageUrl} alt="Player" />
        <div className="card-body">
          <h5 className="card-title">{player.name}</h5>
          <p className="card-text">{player.position}</p>
          <button className="btn btn-light" onClick={this.editPlayerEvent}><i className="fas fa-pencil-alt"></i></button>
          <button className="btn btn-light" onClick={this.deletePlayerEvent}><i className="fas fa-trash-alt"></i></button>
        </div>
      </div>
    );
  }
}

export default Player;
