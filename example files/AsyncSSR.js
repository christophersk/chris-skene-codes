// server.js:
app.get('*', asyncFetch);

function asyncFetch(req, res) {
  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk, createLogger({ collapsed: true })))
  );

  if (req.url === '/ssr-async') {
    store.dispatch(fetchData())
      .then(() => handleRender(req, res))
      .catch(console.error);
  } else {
    handleRender(req, res);
  }

  function handleRender(req, res) {
    const preloadedState = store.getState();
    const html = ReactDOMServer.renderToString(
      <Provider store={store}>
        <ServerRoot url={req.url} />
      </Provider>
    )

    res.send(renderFullPage(html, preloadedState));
  }
}

// in SSRAsync.js:
componentDidMount() {
  if (!this.props.asyncText) {
    this.props.fetchData();
    console.log('fetching from /api/fetch');
  } else {
    console.log('Existing state detected, not fetching data');
  }
}
