import React from 'react';
import { connect, Provider } from 'react-redux';
import store from '../store';
import { StaticRouter } from 'react-router';
import { Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import About from './About';

export default class Root extends React.Component {
  render() {
    console.log('root props are', this.props);
    return (
      <Provider store={store}>
        <StaticRouter location={this.props.url} context={this.props.context}>
          <div>
            <Route path="*" component={Navbar} />
            <Route exact path="/about" component={About} />
          </div>
        </StaticRouter>
      </Provider>
    );
  }
}

// const mapState = (state, ownProps) => ({
// });

// const mapDispatch = dispatch => ({
// })

// export default connect(mapState, mapDispatch)(Root);
