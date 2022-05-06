import React from 'react';
import { Person } from '../person/Person';
import { ChatWindowProps } from './ChatWindowProps';

function ChatWIndow(props: ChatWindowProps) {
  function onStart(participants: ReadonlyArray<Person>) {
    console.log('Chat started....');
  }

  function onMessage(message: string) {
    console.log('Message: ' + message);
  }

  function onStop() {
    console.log('Chat stopped....');
  }

  return (
    <>
      <div className="chat-window">
        <div className="chat-window-header">
          <div className="chat-window-header-title">
            <h1>Chat</h1>
          </div>
          <div className="chat-window-header-participants">
            <h2>Participants</h2>
            <div className="chat-window-header-participants-list">
              {props.participants.map((participant) => (
                <div key={participant.id} className="chat-window-header-participants-list-item">
                  <div className="chat-window-header-participants-list-item-name">
                    {participant.name}
                  </div>
                  <div className="chat-window-header-participants-list-item-status">
                    {participant.status}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="chat-window-body">
          <div className="chat-window-body-messages">
            <div className="chat-window-body-messages-list">
              {props.messages.map((message) => (
                <div key={message.id} className="chat-window-body-messages-list-item">
                  <div className="chat-window-body-messages-list-item-sender">
                    <div className="chat-window-body-messages-list-item-sender-avatar">
                      <img src={message.sender.avatar.href} alt="Message sender's avatar image" />
                    </div>
                    <div className="chat-window-body-messages-list-item-sender-name">
                      <span>{message.sender.name}</span>
                    </div>
                  </div>
                  <div className="chat-window-body-messages-list-item-content">
                    {message.content}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="chat-window-body-input">
            <input
              type="text"
              placeholder="Type a message..."
              onKeyPress={(event) => {
                if (event.key === 'Enter') {
                  props.onMessage(event.target.value);
                  event.target.value = '';
                }
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default ChatWIndow;
