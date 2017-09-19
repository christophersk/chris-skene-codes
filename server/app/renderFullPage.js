export default function renderFullPage(html, preloadedState) {
  return `
    <!doctype html>
    <html>
      <head>
        <link rel="stylesheet" href="/bootstrap/dist/css/bootstrap.min.css" >
        <title>Redux Universal Example</title>
      </head>
      <body>
        <div id="app">${html}</div>
        <script>
          // WARNING: See the following for security issues around embedding JSON in HTML:
          // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
        </script>
        <script src="/frontend-2.js" defer></script>
      </body>
    </html>
  `
}
