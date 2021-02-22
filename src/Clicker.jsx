import React from 'react';

export default function Clicker() {

    const [count, setCount] = React.useState(0);

    return(
        <>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Up</button>
            <h1>{count}</h1>
            <button onClick={() => setCount(count -1)}>Down</button>
        </>
    )
}