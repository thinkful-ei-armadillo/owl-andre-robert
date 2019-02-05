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
        jsx = <div className = "message-container">
          <img src={p.avatar} alt={"avatar for user"}></img>
          <div>
            <h6>{p.name}</h6> <span>{time.toLocaleTimeString()}</span>
            <p>{this.props.event.message}</p>
          </div>
        </div>;
        break;
      case 'thumbs-up':
        jsx = <span><strong>{p.name}</strong> gave a thumbs up.</span>;
        break;
      case 'thumbs-down':
        jsx = <span><strong>{p.name}</strong> gave a thumbs down.</span>;
        break;
      case 'raise-hand':
        jsx = <span><strong>{p.name}</strong> raised their hand.</span>;
        break;
      case 'clap':
        jsx = <span><strong>{p.name}</strong> clapped.</span>;
        break;
      case 'join':
        jsx = <span><strong>{p.name}</strong> joined</span>;
        break;
      case 'leave':
        jsx = <span><strong>{p.name}</strong> left</span>;
        break;
      case 'join-stage':
        jsx = <span><strong>{p.name}</strong> joined the stage</span>;
        break;
      case 'leave-stage':
        jsx = <span><strong>{p.name}</strong> left the stage</span>;
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
