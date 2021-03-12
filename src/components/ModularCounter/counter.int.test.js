import {fireEvent, render, waitFor} from '@testing-library/react';
import Counter from './counter';

describe('counter', () => {
  test('given a click on increment, should update the counter info', () => {
    const counter = render(<Counter />)
    const incrementButton = counter.getByText(/increment/i)

    fireEvent.click(incrementButton);
    fireEvent.click(incrementButton);
    const counterText = counter.getByText(/counter/i).textContent;

    expect(counterText).toEqual('Counter 2');
  })

  test('given a click on decrement, should decrement the counter info', () => {
    const counter = render(<Counter />)
    const decrementButton = counter.getByText(/decrement/i)
    const incrementButton = counter.getByText(/increment/i)

    fireEvent.click(incrementButton);
    fireEvent.click(incrementButton);
    fireEvent.click(decrementButton);
    const counterText = counter.getByText(/counter/i).textContent;
    counter.debug();

    expect(counterText).toEqual('Counter 1');
  })
})