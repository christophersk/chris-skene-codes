import React from 'react';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router';
import store from '../store';
import SharedRoutes from './SharedRoutes';

export default function Root(props) {
  return (
      <StaticRouter location={props.url} context={props.context}>
          <SharedRoutes />
      </StaticRouter>
  );
}
