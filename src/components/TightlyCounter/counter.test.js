import {fireEvent, render} from '@testing-library/react';
import Counter from './counter';

describe('counter tightly coupled', () => {
  
  test('given no arguments, should render the counter component', () =>{
    const counter = render(<Counter />);
    const counterText = counter.getByText(/Counter/i).textContent
    expect(counterText).toEqual('Counter 0');
  })

  test('given no argument, should render increment button', () => {
    const counter = render(<Counter />);
    const counterText = counter.getByText(/increment/i).textContent
    expect(counterText).toEqual('increment');
  })
  
  test('given a click on increment, should update the counter info', () => {
    const counter = render(<Counter />)
    const incrementButton = counter.getByText(/increment/i)

    fireEvent.click(incrementButton);
    fireEvent.click(incrementButton);
    const counterText = counter.getByText(/counter/i).textContent;

    expect(counterText).toEqual('Counter 2');
  })
})