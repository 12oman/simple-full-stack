const express = require('express');
const cors = require('cors');  

const app = express();
const port = 3000;


app.use(cors());

app.use(express.static('public'));

app.get('/api', (req, res) => {
  res.json({ message: 'Hello from server!' });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
