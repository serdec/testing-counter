import counterReducer, {addAction, decrementAction} from './reducer';

describe('counter reducer', () => {
  test('given no argument, should return the valid initial state', () =>{
    expect(counterReducer()).toEqual(0);
  })

  test('given an increment action, should return the incremented state', () => {
    const state = 1;
    expect(counterReducer(state, addAction())).toEqual(2);
  })

  test('given an decrement action, should return the decremented state', () => {
    const state = 1;
    expect(counterReducer(state, decrementAction())).toEqual(0);
  })
})