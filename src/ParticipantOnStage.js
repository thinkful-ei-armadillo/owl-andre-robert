import React, { Component } from 'react';
//import './ParticipantList.css';
//import Participant from './Participant';

class StageArea extends Component {
  render() {
    return (
      <div className="stage-participant">
        <h3>{this.props.obj.name}</h3>
        <img src = {this.props.obj.avatar} alt = "avatar of user"></img>
      </div>
    );
  }
}

export default StageArea;
