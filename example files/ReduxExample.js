// server.js
app.get('*', handleRender);

function handleRender(req, res) {
  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk, createLogger({ collapsed: true })))
  );
  const preloadedState = store.getState();
  const html = ReactDOMServer.renderToString(
    <Provider store={store}>
      <ServerApp url={req.url} />
    </Provider>
  )
  res.send(renderFullPage(html, preloadedState))
}

function renderFullPage(html, preloadedState) {
  return `
    <!doctype html>
    <html>
      <head>
        <link rel="stylesheet" href="/bootstrap/dist/css/bootstrap.min.css" >
        <title>React-Redux</title>
      </head>
      <body>
        <div id="app">${html}</div>
        <script>
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
        </script>
        <script src="/frontend.js" defer></script>
      </body>
    </html>
  `
}

// ClientApp.js
/* imports omitted */
const preloadedState = window.__PRELOADED_STATE__;
delete window.__PRELOADED_STATE__;

const store = createStore(rootReducer, preloadedState, composeWithDevTools(applyMiddleware(thunk, createLogger({ collapsed: true }))))

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <SharedRoutes />
    </Router>
  </Provider>,
  document.getElementById('app')
);
