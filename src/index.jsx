import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

class Default extends React.Component {
  state = {
    count: 0
  }

  componentDidMount() {
    if (localStorage.getItem('timer') !== null) {
      this.setState({
        count: parseInt(localStorage.getItem('timer'))
      })
    }
  }

  componentDidUpdate() {
    localStorage.setItem('timer', this.state.count)
  }

  start = () => {
    const timerId = setInterval(() => {
      this.setState((prevState) => ({
        count: prevState.count + 1
      }))
    }, 1000)

    this.setState({
      timerId: timerId
    })
  }

  stop = () => {
    clearInterval(this.state.timerId);
  }

  reset = () => {
    this.setState({
      count: 0
    })
    localStorage.removeItem('timer');
  }

  render() {
    return (
      <div>
        <h2>{this.state.count}</h2>
        <button onClick={this.start}>Start</button>
        <button onClick={this.stop}>Stop</button>
        <button onClick={this.reset}>Reset</button>
      </div>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    <Default />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
