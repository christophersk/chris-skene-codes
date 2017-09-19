import React from 'react';
import { Router } from 'react-router';
import { Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import About from './About';
import Projects from './Projects';
import Hello from './Hello';

export default class SharedRoutes extends React.Component {
  render() {
    console.log('root props are', this.props);
    return (
      <div>
          <div>
          <Route path="*" component={Navbar} />
          <Route exact path="/" component={Hello} />
          <Route exact path="/about" component={About} />
          <Route exact path="/projects" component={Projects} />
          </div>
      </div>
    );
  }
}
