import express from 'express';
import path from 'path';
import ReactDOMServer from 'react-dom/server';
import React from 'react';
import ServerRoot from '../js/components/ServerRoot';
import { Provider } from 'react-redux';
import renderFullPage from './renderFullPage';
const app = express();

// MIDDLEWARE

app.use(require('./logging.middleware'));
app.use(require('./body-parsing.middleware'));
app.use(require('./statics.middleware'));

function handleRender(req, res) {
  const html = ReactDOMServer.renderToString(
    <Provider>
      <ServerRoot url={req.url} />
    </Provider>
  )

  res.send(renderFullPage(html));
}

app.get('*', handleRender);

// ERROR MIDDLEWARE
app.use(require('./500.middleware'));

module.exports = app;
