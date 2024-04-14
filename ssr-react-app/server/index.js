// server/index.js
require('@babel/register')({
    presets: ['@babel/preset-env', '@babel/preset-react']
});

const express = require('express');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const App = require('../client/App').default;

const app = express();

app.use(express.static('dist'));

app.get('*', (req, res) => {
    const appMarkup = ReactDOMServer.renderToString(React.createElement(App));
    const html = `
        <!DOCTYPE html>
        <html>
            <head>
                <title>SSR React App</title>
                <link rel="stylesheet" href="/styles.css"> <!-- Подключить CSS файл -->
            </head>
            <body>
                <div id="root">${appMarkup}</div>
                <script src="/bundle.js"></script>
            </body>
        </html>
    `;
    res.send(html);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
