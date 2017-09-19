import React from 'react';
import { Router } from 'react-router';
import { Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import About from './About';
import Projects from './Projects';
import history from '../history';
import SharedRoutes from './SharedRoutes';

export default class Routes extends React.Component {
  render() {
    console.log('root props are', this.props);
    return (
      <div>
        <Router history={history}>
          <SharedRoutes />
        </Router>
      </div>
    );
  }
}
      // <BrowserRouter history={history}>
      //   <div>
      //     <Route path="*" component={Navbar} />
      //     <Route exact path="/about" component={About} />
      //     <Route exact path="/projects" component={Projects} />
      //   </div>
      // </BrowserRouter>
