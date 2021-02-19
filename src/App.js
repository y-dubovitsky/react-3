import React from 'react';
import Posts from './components/Posts';

export default class App extends React.Component {

  state = {
    text: '',
    check: '',
  }

  onCheck = (event) => {
    this.setState({
      check: event.target.checked
    }, () => console.log(this.state.check))
  }

  onInput = (event) => {
    this.setState({
      [event.target.name] : event.target.value
    }, console.log(this.state.text))
  }

  onSend = (event) => {
    const {text, check} = this.state;
    (check && this.validateEmail(text)) ? this.onSuccess() : alert("Fail");
  }

  onSuccess() {
    Object.keys(this.state).forEach(state => {
      this.setState({
        [state]: ''
      })
    })
    alert("Success")
  }

  validateEmail = (email) =>
    {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

  render() {
    const {text, check} = this.state;

    return(
      <div>
        <input name="text" type="text" onChange={this.onInput} value={text}></input>
        <input name="check" id="subscribeNews" type="checkbox" onChange={this.onCheck} checked={check}></input>
          <label for="subscribeNews">Ok?</label>
        <input type="button" value="Send" onClick={this.onSend}></input>
      </div>
    )
  }
}