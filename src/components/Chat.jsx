import React from 'react';

export class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [{body: 'Hello!'}]
    }
    this.onKeyPressHandler = this.onKeyPressHandler.bind(this)
  }
  onKeyPressHandler(e) {
    if (e.ctrlKey && e.charCode === 13) {
      alert(e.target.value);
      e.target.value = ''
    }
  }

  render() {
    return <div style={{textAlign: 'center'}}>
      <h1>My chat on WebSockets</h1>
      <div style={chatStyle}>
        {this.state.messages.map(m => <div>{m.body}</div>)}
      </div>
      <textarea onKeyPress={this.onKeyPressHandler}>Hi</textarea>
    </div>
  }
}

const chatStyle = {
  maxWidth: '1000px',
  width: '100%',
  margin: '0 auto',
  padding: '10px',
  border: '1px solid black',
  height: '400px',
  overflowY: 'scroll',

}