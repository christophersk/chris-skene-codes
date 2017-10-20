import axios from 'axios';

// ACTION TYPES
const SET_TEST = 'SET_TEST';

// ACTION CREATORS
export const setTest = test => ({
  type: SET_TEST,
  test
})

// REDUCER
export default function reducer (state = 'this is the default state', action) {
  switch (action.type) {
    case SET_TEST:
      return action.test;
    default:
      return state;
  }
}
