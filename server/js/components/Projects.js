import React from 'react';
import { connect } from 'react-redux';
import { setTest } from '../reducers/test';

class Projects extends React.Component {

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2">This is the projects page
          <br />
          <br />
          <br />
          <input type="text" value={this.props.test} onChange={e => this.props.setTest(e.target.value)} />
          {this.props.test}
          </div>
        </div>
      </div>
    );
  }
}


const mapState = (state, ownProps) => ({
  test: state.test,
});

const mapDispatch = dispatch => ({
  setTest: input => dispatch(setTest(input))
})

export default connect(mapState, mapDispatch)(Projects);
