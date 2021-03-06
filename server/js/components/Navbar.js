import React from 'react';
import { connect } from 'react-redux';

class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar navbar-inverse navbar-fixed-top" role="navigation" style={{backgroundColor: 'transparent', borderStyle: 'none'}}>
      <div className="container container-fixed" id="top-navbar-container-fixed" style={{backgroundColor: '#222', borderBottomRightRadius: '6px', borderBottomLeftRadius: '6px'}}>
        <div className="navbar-header">
          <button type="button" className="navbar-toggle navbar-color-toggle" data-toggle="collapse" data-target=".navbar-collapse">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
        </div>
        <div className="collapse navbar-collapse" style={{textAlign: 'center'}}>
            <ul className="nav navbar-nav" style={{textAlign: 'center', width: '100%'}}>
                <li className="btn-link-color" style={{float: 'none', display: 'inline-block'}}>
                  <a id="top-link" className="btn project-top-navbar-link-glow" style={{color: '#63a0d4'}} href="/about">
                    <span className="glyphicon glyphicon-th-large" />
                  </a>
                </li>
                <li className="btn-link-color" style={{float: 'none', display: 'inline-block'}}>
                  <a className="btn project-top-navbar-link-glow" style={{color: '#ffffff'}} href="/about">About</a>
                </li>
                <li className="btn-link-color" style={{float: 'none', display: 'inline-block'}}>
                  <a className="btn project-top-navbar-link-glow" style={{color: '#ffffff'}} href="/projects">Projects</a>
                </li>
            </ul>
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

export default connect(mapState, mapDispatch)(Navbar);
