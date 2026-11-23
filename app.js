const http = require('http');

function handler(req, res) {
  if (req.url === '/health') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    return res.end('ok');
  }
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ service: 'p7-app', version: process.env.APP_VERSION || 'dev' }));
}

if (require.main === module) {
  http.createServer(handler).listen(8080, () => console.log('listening on 8080'));
}

module.exports = { handler };
