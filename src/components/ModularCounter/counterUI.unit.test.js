import { getDirectiveNames } from '@apollo/client/utilities';
import {render} from '@testing-library/react';
import CounterUI from './counterUI';

describe('counterUI', () => {
  test('given no arguments, should render the counter component', () =>{
    const counter = render(<CounterUI />);
    const counterText = counter.getByText(/Counter/i).textContent
    expect(counterText).toEqual('Counter 0');
  })

  test('given a count property, should render the given count', () => {
    const counter = render(<CounterUI count={5} />);
    const counterText = counter.getByText(/counter/i).textContent
    expect(counterText).toEqual('Counter 5');
  })
  test('given no argument, should render inc button', () => {
    const counter = render(<CounterUI />);
    const counterText = counter.getByText(/increment/i).textContent
    expect(counterText).toEqual('increment');
  })
  test('given no argument, should render decrement button', () => {
    const counter = render(<CounterUI />);
    const counterText = counter.getByText(/decrement/i).textContent
    expect(counterText).toEqual('decrement');
  })
})