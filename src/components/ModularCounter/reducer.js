export const addAction = () => ({
  type: addAction.type,
})
addAction.type = 'add';
export const decrementAction = () => ({
  type: decrementAction.type,
})
decrementAction.type = 'decrement';

const counterReducer = (state = 0, {type = '', payload = {}} ={}) => {
  switch(type){
    case addAction.type:
      return state + 1;
    case decrementAction.type:
      return state - 1;
    default:
      return state;
  }
}

export default counterReducer;