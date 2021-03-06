import React, { Component } from 'react';
import ParticipantOnStage from './ParticipantOnStage'
//import './ParticipantList.css';
//import Participant from './Participant';

class StageArea extends Component {
  render() {
    return (
      <section className="stage-area">
         {this.props.participantsOnStage.map((p, index) => <ParticipantOnStage key={index} obj = {p} />)} 
      </section>
    );
  }
}

export default StageArea;
