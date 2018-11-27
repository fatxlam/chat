import React, { Component } from 'react'
import { animateScroll } from 'react-scroll'

import InputForm from './companents/InputForm.js'
import MessagesList from './companents/MesagesList.js'

class App extends Component {
  state = { posts: [], myName: undefined }

  addMessage = ({ id, ...rest }) => {
    this.state.posts.push({
      key: id,
      ...rest
    })
    this.setState({
      posts: this.state.posts
    })
  }

  handleSubmit = message => {
    this.socket.send(
      JSON.stringify({
        authorName: this.state.myName,
        content: message
      })
    )
  }

  socket = undefined

  handleSetName = name => {
    this.setState({
      myName: name
    })
    this.socket = new WebSocket(this.props.uri)
    this.socket.onmessage = event => {
      const message = JSON.parse(event.data)
      if (message.type === 'message') {
        console.log('message', message.type)
        this.addMessage(message.message)
        if (!document.hasFocus()) this.props.ring.play()
      } else if (message.type === 'messages') {
        this.setState({
          posts: message.messages
        })
      }
      console.log('Receive data ' + event.data)
    }
  }

  componentDidUpdate(nextProps, nextState) {
    animateScroll.scrollToBottom()
  }

  render() {
    return (
      <div className="container" style={{ maxWidth: '350px' }}>
        <h2 className="text-center">Общий чат</h2>
        <p className="lead">
          Флудилка
        </p>
        {!this.state.myName ? (
          <InputForm
            addMessage={this.handleSetName}
            placeHolder="enter you name"
          />
        ) : (
          <div>
            <div className="sticky-top">
              <h3 className="text-info">{this.state.myName}</h3>
            </div>
            <MessagesList posts={this.state.posts} myName={this.state.myName} />
            <InputForm
              addMessage={this.handleSubmit}
              placeHolder="enter message"
            />
          </div>
        )}
      </div>
    )
  }
}

export default App
