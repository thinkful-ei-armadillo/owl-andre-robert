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
        <ChatLog></ChatLog>
        <ParticipantList participants = {STORE.participants}></ParticipantList>
        <StageArea></StageArea>
      </main>
    );
  }
}

export default App;
