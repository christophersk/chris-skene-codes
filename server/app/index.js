const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const ReactDOMServer = require('react-dom/server');
const React = require('react');
import ServerRoot from '../js/components/ServerRoot';
import Hello from '../js/components/Hello';
import { match, routerContext } from 'react-router';
import About from '../js/components/About';
import Projects from '../js/components/Projects';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '../js/reducers';
import renderFullPage from './renderFullPage';

app.use(require('./logging.middleware'));
app.use(require('./body-parsing.middleware'));
app.use(require('./statics.middleware'));
// app.use(require('./session.middleware'));

const routes = [
  { path: '/',
    component: About,
    //loadData: () => getSomeData(),
  },
  // etc.
]

function handleRender(req, res) {
  const store = createStore(rootReducer)

  const html = ReactDOMServer.renderToString(
    <Provider store={store}>
      <ServerRoot url={req.url} />
    </Provider>
  )

  const preloadedState = store.getState();

  res.send(renderFullPage(html, preloadedState))
}

// function handleRender(req, res) {
//   const context = {};

//   console.log('req url is', req.url);
//   if (req.url === '/test') {
//     Hello.fetchData()
//     .then(() => console.log('data fetch ran'))
//     .then(() => renderFunc())
//     .catch(console.error)
//   } else {
//     renderFunc();
//   }

//   function renderFunc () {
//     const html = ReactDOMServer.renderToString(<ServerRoot url={req.url} context={context} />);

//     fs.readFile('./index.html', 'utf8', function (err, data) {
//       if (err) throw err;

//       const document = data.replace(/<div id="app"><\/div>/, `<div id="app">${html}</div>`);

//       res.send(document);
//     });
//   }
// }

app.get('*', handleRender);

// app.use('/api', require('../api'));
app.use('*', function (req, res) {
  res.sendFile(path.join(__dirname, '..', '..', 'client', 'index.html'));
});

app.use(require('./500.middleware'));

module.exports = app;

