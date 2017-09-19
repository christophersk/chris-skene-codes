// ACTION TYPES
const SET_TEST = 'SET_TEST';

// ACTION CREATORS
export const setTest = test => ({
  type: SET_TEST,
  test
})

export default function reducer (state = 'default', action) {
  switch (action.type) {
    case SET_TEST:
      return action.test;
    default:
      return state;
  }
}


