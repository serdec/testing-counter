import React, { useReducer } from 'react';
import CounterUI from './counterUI';
import counterReducer, { decrementAction } from './reducer';
import {addAction} from './reducer';

const Counter = () => {

  const [count, dispatch] = useReducer(counterReducer, 0);

  return <>
  <CounterUI count={count} onIncClick={()=>dispatch(addAction())} onDecrClick={()=> dispatch(decrementAction())}/>
  </>
}

export default Counter;