export default ({ body, title, initialState }) => `
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>${title}</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="stylesheet" href="main.css" />
    <script>window.__INITIAL_DATA__ = ${initialState}</script>
  </head>
  <body>
    <div id="app">${body}</div>
    <script src="bundle.js"></script>
  </body>
</html>
`;
