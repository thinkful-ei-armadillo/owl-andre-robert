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
      case 'thumbs-up':
        jsx = <span>{p.name} gave a thumbs up.</span>;
        break;
      case 'thumbs-down':
        jsx = <span>{p.name} gave a thumbs down.</span>;
        break;
      case 'raise-hand':
        jsx = <span>{p.name} raised their hand.</span>;
        break;
      case 'clap':
        jsx = <span>{p.name} clapped.</span>;
        break;
      case 'join':
        jsx = <span>{p.name} joined</span>;
        break;
      case 'leave':
        jsx = <span>{p.name} left</span>;
        break;
      case 'join-stage':
        jsx = <span>{p.name} joined the stage</span>;
        break;
      case 'leave-stage':
        jsx = <span>{p.name} left the stage</span>;
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
