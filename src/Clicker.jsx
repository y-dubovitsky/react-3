import React from 'react';

export default function Clicker() {

    const [count, setCount] = React.useState(0);

    function down(value) {
        let a = value - 1;

        return (
            setCount(a)
        )
    }

    React.useEffect(() => {
        console.log('Mount')

        return () => console.log('Unmount!')
        
    }, [count]);

    return (
        <>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Up</button>
            <h1>{count}</h1>
            <button onClick={() => down(count)}>Down</button>
        </>
    )
}