const express = require('express');
const morgan = require('morgan');
const { getSpecsForId } = require('../database/index.js');

const app = express();

app.use(morgan('tiny'));
app.use(express.static('client/dist'));

app.get('/api/watches/:wid/details', (req, res) => {
  const id = req.params.wid;
  getSpecsForId(id, (specsForId) => {
    console.log(specsForId);
    res.send(specsForId);
  });
});

app.listen(3003, () => {
  console.log('Listening on port 3003...');
});
