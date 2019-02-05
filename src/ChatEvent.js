import React, { Component } from 'react';
import {STORE} from './store';
//import './ParticipantList.css';
//import Participant from './Participant';

class ChatEvent extends Component {
  render() {
    let jsx = '';
    let p = STORE.participants.find(i => i.id === this.props.event.participantId);
    let time = new Date(this.props.event.time);

    switch(this.props.event.type) {
      case 'message':
        jsx = <div>
          <img src={p.avatar} width={'25px'} alt={"avatar for user"}></img>
          <div>
            <h6>{p.name}</h6> <span>{time.toString()}</span>
            <p>{this.props.event.message}</p>
          </div>
        </div>;
        break;
      default:
        //
    }

    return (
      <li className="chatEvent">{jsx}</li>
    );
  }
}

export default ChatEvent;
