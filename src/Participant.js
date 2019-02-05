import React, { Component } from 'react';
//import STORE from './store';
//import './ParticipantList.css';
//import Participant from './Participant';

class Participant extends Component {
  render() {
    let jsx = '';
    if (this.props.participant.inSession){
      jsx = <p className="session-indicator">in session</p>;
    }
    else {
      jsx = <p className="disabled session-indicator">not in session</p>;
    }
    return (
      <div className="participant">
        <img src={this.props.participant.avatar} alt="user avatar" ></img>
          <div>
            <p className = "msg-name">{this.props.participant.name}</p>
            {jsx}
          </div>
      </div>
    );
  }
}

export default Participant;
