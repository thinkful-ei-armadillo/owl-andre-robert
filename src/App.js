import React, { Component } from 'react';
import './App.css';
import ParticipantList from './ParticipantList';
import StageArea from './StageArea';
import Chatlog from './Chatlog';
import {STORE} from './store';

class App extends Component {
  render() {
    // participantsOnStage={STORE.participants.filter()}
    return (
      <main className="owl">
        <ChatLog></ChatLog>
        <ParticipantList></ParticipantList>
        <StageArea></StageArea>
      </main>
    );
  }
}

export default App;
