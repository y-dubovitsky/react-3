import React from 'react';
import logo from './logo.svg';
import Clicker from './Clicker';

function App() {

  const [isClicker, setIsClicker] = React.useState(false);

  return (
    <>
      <button onClick={() => setIsClicker((prevIsClicker) => !prevIsClicker)}>Toogle Clicker</button>
      {isClicker ? <Clicker/> : ''}
    </>
  )
}

export default App;
