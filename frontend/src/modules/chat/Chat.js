import React, { Component } from "react";
import SockJsClient from "react-stomp";
import { TalkBox } from "react-talk";
import { Link } from 'react-router-dom';
import { startChat, getCurrentUserInfo } from './actions'

import './styles/styles.css'

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chatId: '',
      messages: [],
      currentUser:'',
      toUser:''
    };

    this.getCurrentUserInfo = this.getCurrentUserInfo.bind(this);
    this.returnSocket = this.returnSocket.bind(this)
    this.initializeChat = this.initializeChat.bind(this)
  }

  getCurrentUserInfo(){
    console.log(sessionStorage.getItem('serviceToken'));
    const UserDTO = {
      userToken: sessionStorage.getItem('serviceToken')
    }
    console.log(UserDTO.userToken);
    console.log(UserDTO);
    getCurrentUserInfo(UserDTO).then(response=>{
      this.setState({
        currentUser : response.userName
      }
      )
    })
  }



  onMessageReceive = (message) => {
    console.log(message)
    const text = { authorId: message.authorId, author: message.userName, message: message.text}
    this.setState(prevState => ({
      messages: [...prevState.messages, text]
    }))
  }

  sendMessage = (text, self) => {
    const messageDto = {
      userToken: sessionStorage.getItem('serviceToken'),
      chatId: this.state.chatId,
      text: self.message,
      userName: self.author,
      authorId: 1
    }
    try {
      this.clientRef.sendMessage("/app/all", JSON.stringify(messageDto)).then(response => {

      });
      return true;
    } catch (e) {
      return false;
    }
  }

  componentDidMount() {
   this.getCurrentUserInfo();
   this.initializeChat();
  }


  componentWillReceiveProps(newProps){
    if(newProps.userName){
      console.log("Se ha recibido el username:" + newProps.userName)
      this.initializeChat()
    }
  }

  initializeChat(){
    
    if(this.props.userName!==""){
      
      console.log(sessionStorage.getItem('serviceToken'));
      const chatDto = {
        userToken: sessionStorage.getItem('serviceToken'),
        userName: this.props.userName
      }
      startChat(chatDto).then(response => {
        if(response.messages !==null){
    
        const texts = response.messages.map((message) => {
          
          return { authorId: message.messageSender.id, author: message.messageSender.userName, message: message.text }
        })

        this.setState({
          messages: texts,
          chatId: response.id,
        })}
      })

    }
  }

  returnSocket(){
    if(this.props.userName!=="" && this.state.currentUser !== '' && this.state.chatId !== ''){
      const wsSourceUrl = window.location.protocol + "//localhost:8080/handler?userName="+ this.state.chatId
     
      return(
        <SockJsClient url={wsSourceUrl} topics={["/user/topic/all"]}
        onMessage={this.onMessageReceive} ref={(client) => { this.clientRef = client }}
        onConnect={() => { this.setState({ clientConnected: true }) }}
        onDisconnect={() => { this.setState({ clientConnected: false }) }}
        debug={false} />)
    }
  }

  returnBox(){
    if(this.props.userName!=="" && this.state.currentUser !== '' ){
      return(
         <div>
          <Link to="/chat">Volver a chats</Link>
          <TalkBox  topic={this.props.userName} currentUserId={1}
          currentUser={this.state.currentUser} messages={this.state.messages}
          onSendMessage={this.sendMessage} connected={this.state.clientConnected} />
          </div>
      )
    }
  }
  


  render() {

    return (
      <div className="chatSection">
        {this.returnBox()}
        {this.returnSocket()}
      </div>
    );
  }
}
export default Chat;