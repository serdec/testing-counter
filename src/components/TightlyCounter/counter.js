import React, { useState } from 'react';

const Counter = () => {

  const [count, setCount] = useState(0);

  const handleClick = () => setCount(count => count + 1)

  return <div>
  <p>Counter {count}</p>
  <button onClick={handleClick}>increment</button>
  </div>
}  

export default Counter;