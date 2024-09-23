const express = require('express');
const app = express();

const PORT = 3021;

app.use((req, res, next) => {
  console.log(`${req.method} request for '${req.url}'`);
  next();
});

app.use(express.static('public'));

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
