import axios from 'axios';

// ACTION TYPES
const SET_ASYNC = 'SET_ASYNC';

// ACTION CREATORS
export const setAsync = asyncText => ({
  type: SET_ASYNC,
  asyncText
})

// REDUCER
export default function reducer (asyncText = '', action) {
  switch (action.type) {
    case SET_ASYNC:
      console.log('setting async state...');
      return action.asyncText;
    default:
      return asyncText;
  }
}

// THUNK CREATORS
export const fetchData = () => dispatch => {
  console.log('fetchData running');
  return axios.get('http://localhost:3000/api/fetch')
    .then(res => res.data)
    .then(asyncText => dispatch(setAsync(asyncText)))
    .catch(console.error)
}
