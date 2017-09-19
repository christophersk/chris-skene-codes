import React from 'react';
import { connect } from 'react-redux';
import { testThunk, setTest } from '../reducers/test';
// const { Test } = require('../../db/models');
import store from '../store';

class Hello extends React.Component {

  static fetchData() {
    console.log('fetchData hit');
    // this.props.testThunk();
    // return Test.findById(1)
    testThunk();
    //   .then(test => store.dispatch(setTest(test.name)))
    //   .catch(console.error);
  }

  render () {
    return (
      <div className="container" style={{paddingTop: '60px'}}>
      <div className="row">
        <div className="col-md-8 col-md-offset-2">
        <br/>
        <br/>
        <br/>
        <br/>
        Hello World!!!
        <br/>
        fetched props are: {this.props.test}
      </div>
      </div>
      </div>
    );
  }
}

const mapState = (state, ownProps) => ({
  test: state.test
});

const mapDispatch = dispatch => ({
});

export default connect(mapState, mapDispatch)(Hello);
