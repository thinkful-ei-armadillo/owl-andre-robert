import React, { Component } from 'react';
import './App.css';
import ParticipantList from './ParticipantList';
import StageArea from './StageArea';
import ChatLog from './ChatLog';
import {STORE} from './store';

class App extends Component {
  render() {
    // participantsOnStage={STORE.participants.filter()}
    return (
      <main className="owl">
        <div className = "container-left">
          <button id = "display-participants">Participants</button>
          <button id ="display-chat">Chat</button>
          <ChatLog chatEvents={STORE.chatEvents}></ChatLog>
          <ParticipantList participants = {STORE.participants}></ParticipantList>
        </div>
        <StageArea participantsOnStage = {STORE.participants.filter(p => p.onStage)} ></StageArea>
      </main>
    );
  }
}

export default App;
