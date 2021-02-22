import React from 'react';
import './App.css';

export default function App() {

  const [obj, setObj] = React.useState({
    a: 'Hello',
    b: 'World'
  });

  const changeObj = () => {
    setObj({...obj, b: Math.random()})
  }

  const changeObj1 = () => {
      setObj((prev) => {
        return {
        a: prev.a,
        b: Math.random()
        }
      })
  }

  return (
    <div className="App">
      {Math.random()}
      <button onClick={() => changeObj()}>Click</button>
      <button onClick={() => changeObj1()}>Click</button>
      {console.log('OBJ ' + obj.a + " " + obj.b)}
    </div>
  );
}