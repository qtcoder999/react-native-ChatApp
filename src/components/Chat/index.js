import React from 'react'
import { StyleSheet, Text, View,Button } from 'react-native'
import {GiftedChat} from 'react-native-gifted-chat'
import Backend from '../../Backend'
;class Chat extends React.Component {
  state = {messages: []}
  componentWillMount() {

  }
render() {
return (
  <GiftedChat
  messages={this.state.messages}
  onSend={(message) => {Backend.sendMessage(message)}}
  user={{
    _id: Backend.getUid(),
    name:this.props.name
  }}
/>
)
}
componentDidMount() {
  Backend.loadMessages((message) => {
    this.setState((previousState) => {
      return {
        messages: GiftedChat.append(previousState.messages, message),
      };
    });
  });
}
componentWillUnmount() {
  Backend.closeChat();
}
}



Chat.defaultProps= {name: 'Shubham' }



export default Chat
