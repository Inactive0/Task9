// client/components/Counter.js
import React, { useState } from 'react';
// import './Counter.css';

const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(prevCount => prevCount + 1);
    };

    return (
        <div className="counter">
            <h2>Counter</h2>
            <p>Current Count: {count}</p>
            <button onClick={increment}>Increment</button>
        </div>
    );
};

export default Counter;
