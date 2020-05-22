import React from 'react';
import './Players.scss';
import playerShape from '../../helpers/propz/playerShape';

class Player extends React.Component {
  static propTypes = {
    player: playerShape.playerShape,
  }

  render() {
    const { player } = this.props;
    return (
      <div className="Player col-lg-4 col-md-6 my-2">
        <div className="card mx-auto">
          <div className="header-photo-container">
            <img className="card-img-top header-photo" src="https://upload.wikimedia.org/wikipedia/commons/0/01/Houston_astros_logo.png" alt="Player" />
          </div>
        <img className="player-photo" src={player.imageUrl} alt="Player" />
        <div className="card-body">
          <h5 className="card-title">{player.name}</h5>
          <p className="card-text">{player.position}</p>
        </div>
      </div>
      </div>
    );
  }
}

export default Player;
