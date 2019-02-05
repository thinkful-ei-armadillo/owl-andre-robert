import React, { Component } from 'react';
//import './ChatLog.css';
import ChatEvent from './ChatEvent';

class ChatLog extends Component {
  render() {
    return (
      <section className="chat-log">
        <ul>
          {this.props.chatEvents.map((c, index) => <ChatEvent key={index} event={c} />)}
        </ul>
      </section>
    );
  }
}

export default ChatLog;
