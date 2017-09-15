import React from 'react';
import { connect } from 'react-redux';

class About extends React.Component {
  render() {
    return (
      <div className="container" style={{paddingTop: '60px'}}>
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            About
            <p>Currently I am studying web development at Fullstack Academy in Chicago, focusing on NodeJS, React, Redux, and Postgres. You can check out some of my past and current work on my <a href="/projects">Projects page</a>. In addition to programming, I enjoy playing guitar and singing.</p>
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
