export default function renderFullPage(html) {
  return `
    <!doctype html>
    <html>
      <head>
        <meta name="description" content="Chris Skene is a web developer based in Tallahassee, FL." />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
        <title>Chris Skene | Web Developer</title>
        <style>
          @import url('https://fonts.googleapis.com/css?family=Open+Sans|Roboto');
          h1, h2, h3, h4 {
            font-family: 'Roboto', sans-serif;
          }
          p {
            font-family: 'Open Sans', sans-serif;
            color: '#222222';
          }
          .active {
            color: #222 !important;
          }
          a:hover {
            text-decoration: none !important;
          }
          a {
            text-decoration: none;
          }
        </style>
      </head>
      <body>
        <div id="app">${html}</div>
        <script src="/frontend.js" defer></script>
      </body>
    </html>
  `
}
