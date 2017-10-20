/* Most imports omitted */
import ReactDOMServer from 'react-dom/server';

app.get('*', (req, res) => {
  const html = ReactDOMServer.renderToString(
    <ServerApp url={req.url} />
  )
  res.send(renderFullPage(html))
});

function renderFullPage(html) {
  return `
    <!doctype html>
    <html>
      <head>
        <link rel="stylesheet" href="/bootstrap/dist/css/bootstrap.min.css" >
        <title>React-Redux</title>
      </head>
      <body>
        <div id="app">${html}</div>
        <script src="/frontend-2.js" defer></script>
      </body>
    </html>
  `
}
