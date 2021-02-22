import React from 'react';
import logo from './logo.svg';
import Timer from './Timer';

function App() {

  const [isTimer, setIsTimer] = React.useState(false);

  return (
    <>
      <button onClick={() => setIsTimer((prevIsTimer) => !prevIsTimer)}>Toogle Timer</button>
      <br></br>
      {isTimer ? <Timer/> : ''}
    </>
  )
}

export default App;
