const express = require('express');

const app = express();
const PORT = 8081;

app.get('/', (req, res) => {
  res.send('simple Node.js server written with my pc on my azure account!');
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

