import express from 'express';

const app = express();
app.get('/', (req, res) => {
  res.send('server is ready12');
});
app.listen(5000, () => {
  console.log('Server is running on port http://localhost:5000');
});
