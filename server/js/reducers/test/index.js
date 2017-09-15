const { Test } = require('../../../db/models');

// ACTION TYPES
const SET_TEST = 'SET_TEST';

// ACTION CREATORS
export const setTest = test => ({
  type: SET_TEST,
  test
})

export default function reducer (state = 'foo', action) {
  switch (action.type) {
    case SET_TEST:
      return action.test;
    default:
      return state;
  }
}

// THUNK CREATORS
export const testThunk = () => dispatch => {
  console.log('testThunk is running');
  return Test.findById(1)
    .then(test => dispatch(setTest(test.name)))
    .catch(console.error);
}
