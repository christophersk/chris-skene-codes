const { Test } = require('../../../db/models');

// THUNK CREATORS
export const testThunk = () => dispatch => {
  console.log('testThunk is running');
  return Test.findById(1)
    .then(test => dispatch(setTest(test.name)))
    .catch(console.error);
}
