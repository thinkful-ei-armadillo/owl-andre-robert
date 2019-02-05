import React, { Component } from 'react';
//import './ParticipantList.css';
import Participant from './Participant';

class ParticipantList extends Component {
  render() {
    return (
      <section className="participant-list">
        {this.props.participants.sort((x, y) => (x.inSession === y.inSession) ? 0 : x.inSession ? -1 : 1).map((p, index) => <Participant key={index} participant={p} />)}
      </section>
    );
  }
}

export default ParticipantList;
