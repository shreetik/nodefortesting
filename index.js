import express from 'express';
const app = express();
const port = 3000;


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });


app.get('/hello', (req, res) => {
    res.send('Hello, World!');
  });