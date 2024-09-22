const express = require('express');
const app = express();
const port = 3020;

app.use(express.static('public'));  // Serve static files from 'public' directory

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
