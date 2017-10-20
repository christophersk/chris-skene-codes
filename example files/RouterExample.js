// server.js
/* Unchanged! */

// SharedRoutes.js
/* This component is used by both the server-side and client-side versions of the app! */
/* imports omitted */

export default function SharedRoutes() {
  return (
    <div>
      <div>
        <Route path="*" component={Navbar} />
        <Route exact path="/csr" component={Home} />
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/ssr-state" component={SSRState} />
        <Route exact path="/ssr-async" component={SSRAsync} />
      </div>
    </div>
  );
}

// ServerApp.js
/* this file is passed into ReactDOMServer.renderToString() on the server */
/* Most imports omitted */
import { StaticRouter } from 'react-router';

export default function Root(props) {
  return (
    <StaticRouter location={props.url} >
      <SharedRoutes />
    </StaticRouter>
  );
}

// ClientApp.js
/* this app gets bundled and sent to the client */
/* imports omitted */
ReactDOM.render(
  <Router history={history}>
    <SharedRoutes />
  </Router>,
  document.getElementById('app')
);
