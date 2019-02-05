import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ParticipantList from './ParticipantList';
import StageArea from './StageArea';

class App extends Component {
  render() {
    return (
      <main class="owl">
        <ParticipantList></ParticipantList>
        <StageArea></StageArea>
      </main>
    );
  }
}

export default App;
