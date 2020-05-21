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
      <div className="Player col-md-4 my-2">
        <div className="card">
        <img className="card-img-top player-photo" src={player.imageUrl} alt="Player" />
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
