import React from 'react';
import PropTypes from 'prop-types';
import authData from '../../helpers/data/authData';

class PlayerForm extends React.Component {
  static propTypes = {
    addPlayer: PropTypes.func.isRequired,
  }

  state = {
    playerName: '',
    playerPosition: '',
    playerImageUrl: '',
  }

  nameChange = (e) => {
    e.preventDefault();
    this.setState({ playerName: e.target.value });
  }

  positionChange = (e) => {
    e.preventDefault();
    this.setState({ playerPosition: e.target.value });
  }

  imageChange = (e) => {
    e.preventDefault();
    this.setState({ playerImageUrl: e.target.value });
  }

  savePlayer = (e) => {
    e.preventDefault();
    const { playerName, playerPosition, playerImageUrl } = this.state;
    const { addPlayer } = this.props;
    const newPlayer = {
      imageUrl: playerImageUrl,
      name: playerName,
      position: playerPosition,
      uid: authData.getUid(),
    };
    addPlayer(newPlayer);
  }

  render() {
    const { playerName, playerPosition, playerImageUrl } = this.state;
    return (
      <div className="PlayerForm mb-4">
        <form className="col-6 offset-3">
          <div className="form-group">
            <label htmlFor="player-name">Name</label>
            <input type="text" className="form-control" id="player-name" placeholder="Name" value={playerName} onChange={this.nameChange}/>
          </div>
          <div className="form-group">
            <label htmlFor="player-position">Position</label>
            <input type="text" className="form-control" id="player-position" placeholder="Position" value={playerPosition} onChange={this.positionChange}/>
          </div>
          <div className="form-group">
            <label htmlFor="player-image">Image Url</label>
            <input type="text" className="form-control" id="player-image" placeholder="Image Url" value={playerImageUrl} onChange={this.imageChange}/>
          </div>
          <button className="btn btn-primary" onClick={this.savePlayer}>Save Player</button>
        </form>
      </div>
    );
  }
}

export default PlayerForm;
