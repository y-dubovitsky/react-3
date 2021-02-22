import React from 'react';

export default function Timer() {

    const intervalIdRef = React.useRef(null);

    const [begin, setBegin] = React.useState(true);
    const [time, setTime] = React.useState(() => {
        if (localStorage.getItem('time') === null) {
            return 0;
        }
        return +localStorage.getItem('time');
    });

    React.useEffect(() => {
        localStorage.setItem('time', time)
    }, [time])

    React.useEffect(() => {
        return () => {
            console.log('REmoved!');
            reset();
        }
    }, [])

    const start = () => {
        if (begin) {
            intervalIdRef.current = setInterval(() => {
                setTime((prevTime) => {
                    setTime(prevTime + 1)
                })
            }, 1000)
            setBegin(!begin)
        } else {
            clearInterval(intervalIdRef.current);
            setBegin(!begin);
        }
    }

    const reset = () => {
        if (intervalIdRef.current != null) {
            clearInterval(intervalIdRef.current)
            setTime(0)
            return
        }
        alert('No Interval started!');
    }

    return (
        <>
            <button onClick={() => start()}>{begin ? 'Start' : 'Stop'}</button>
            <h1 style={{ display: 'inline-block', margin: '10px' }}>{time}</h1>
            <button onClick={() => reset()}>Reset</button>
        </>
    )
}