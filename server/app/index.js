const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const ReactDOMServer = require('react-dom/server');
const React = require('react');
import Root from '../js/components/Root';
import Hello from '../js/components/Hello';


app.use(require('./logging.middleware'));
app.use(require('./body-parsing.middleware'));
app.use(require('./statics.middleware'));
// app.use(require('./session.middleware'));

// const routes = [
//       { path: '/',
//         exact: true,
//         component: Hello
//       },
//       { path: '/home',
//         component: Home
//       },
//       { path: '/list',
//         component: List
//       }
//     ];


function handleRender(req, res) {
  const context = {};

  console.log('req url is', req.url);
  if (req.url === '/test') {
    Hello.fetchData()
    .then(() => console.log('data fetch ran'))
    .then(() => renderFunc())
    .catch(console.error)
  } else {
    renderFunc();
  }

  function renderFunc () {
    const html = ReactDOMServer.renderToString(<Root url={req.url} context={context} />);

    fs.readFile('./index.html', 'utf8', function (err, data) {
      if (err) throw err;

      const document = data.replace(/<div id="app"><\/div>/, `<div id="app">${html}</div>`);

      res.send(document);
    });
  }
}

app.get('*', handleRender);

// app.use('/api', require('../api'));
app.use('*', function (req, res) {
  res.sendFile(path.join(__dirname, '..', '..', 'client', 'index.html'));
});

app.use(require('./500.middleware'));

module.exports = app;

