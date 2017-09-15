import React from 'react';
import { connect } from 'react-redux';
import { testThunk, setTest } from '../reducers/test';
const { Test } = require('../../db/models');
import store from '../store';

class Hello extends React.Component {

  static fetchData() {
    console.log('fetchData hit');
    return Test.findById(1)
      .then(test => store.dispatch(setTest(test.name)))
      .catch(console.error);
  }

  render () {
    return (
      <div>Hello World!!!{this.props.test}</div>
    );
  }
}

const mapState = (state, ownProps) => ({
  test: state.test
});

const mapDispatch = dispatch => ({
  //testThunk: () => dispatch(testThunk())
})



export default connect(mapState, mapDispatch)(Hello);
