import React, { useEffect, useState } from 'react'

const Counter = () => {
    const [counter, setCounter] = useState(0);
    const [isCounting, setIsCounting] = useState(false);

    useEffect(() => {
        let timer;
        if(isCounting && counter > 0) {
            timer = setInterval(() => {
                setCounter((prev) => prev - 1);
            }, 1000);
        } else if (counter === 0) {
            setIsCounting(false);
        }
        return () => clearInterval(timer);
    }, [isCounting, counter]);

    const handleStart = () => {
        if (!isCounting && counter > 0) {
            setIsCounting(true);
        }
    };

  return (
    <div>
        <h1>Counter: {counter}</h1>
        <input type="Text" onChange={(e) => setCounter(e.target.value)}/>
        <button onClick={handleStart}>Start</button>
    </div>
  )
}

export default Counter