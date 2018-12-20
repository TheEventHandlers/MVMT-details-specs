const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan('tiny'));
app.use(express.static('client/dist'));

app.listen(3003, () => {
  console.log('Listening on port 3003...');
});
