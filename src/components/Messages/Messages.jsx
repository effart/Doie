import React, { Component } from 'react'
import { Segment, Comment } from 'semantic-ui-react';
import firebase from '../../firebase'

import MessagesHeader from './MessagesHeader';
import MessageForm from './MessageForm';

export default class Messages extends Component {

  state ={
    messagesRef: firebase.database().ref('messages'),
    channel: this.props.currentChannel, //TODO: there is need to assign props to state
    user: this.props.currentUser        //TODO: there is need to assign props to state
  }

  render() {

    const{messagesRef , channel ,user} =this.state

    return (
      <React.Fragment>
        <MessagesHeader/>

        <Segment>
        <Comment.Group className="messages">
          {/* Messages */}
        </Comment.Group>

        </Segment>


        <MessageForm  
        messagesRef={messagesRef}  
        currentChannel={channel}
        currentUser={user}
        />
      </React.Fragment>
    )
  }
}
