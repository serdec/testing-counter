import React from 'react';

const noop = () => {};

const CounterUI = ({count = 0, onIncClick = noop, onDecrClick = noop} = {}) => <div>
<p>Counter {count}</p>
<button onClick={onIncClick}>increment</button>
<button onClick={onDecrClick}>decrement</button>
</div>

export default CounterUI;