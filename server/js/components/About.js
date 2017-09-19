import React from 'react';
import { connect } from 'react-redux';

class About extends React.Component {
  render() {
    return (
      <div className="container" style={{paddingTop: '60px'}}>
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            About
            <p>This is an application that demonstrates server-side React rendering!</p>
          </div>
        </div>
      </div>
    );
  }
}


const mapState = (state, ownProps) => ({
});

const mapDispatch = dispatch => ({
});

export default connect(mapState, mapDispatch)(About);
