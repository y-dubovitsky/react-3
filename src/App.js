import React from 'react';
import './App.css';

const initialState = { count: 0 }

function reducer(state, action) {
  switch (action.type) {
    case 'increment': {
      return { count: state.count + 1 }
    }
    case 'decrement': {
      if (action.value !== undefined) console.log(action.value)
      return { count: state.count - 1 }
    }
    default: {
      return state.count;
    }
  }
}

export default function App() {

  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch(
        {
          type: 'decrement',
          value: 123
        }
      )}>Down</button>
      <button onClick={() => dispatch({ type: 'increment' })}>Up</button>
    </>
  );
}