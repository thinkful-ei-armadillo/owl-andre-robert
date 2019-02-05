import React, { Component } from 'react';
//import STORE from './store';
//import './ParticipantList.css';
//import Participant from './Participant';

class Participant extends Component {
  render() {
    return (
      <div className="participant">
        <p>{this.props.participant.name}</p>
        <img src = {this.props.participant.avatar} alt ="user avatar" ></img>
        <p>{(this.props.participant.inSession) ? 'in session' : 'not in session'}</p>
      </div>
    );
  }
}

export default Participant;
