const express = require('express');
const morgan = require('morgan');
const { getSpecsForId, addWatch, updateWatch } = require('../database/index.js');

const app = express();

app.use(morgan('tiny'));
app.use('/watches/:wid', express.static('client/dist'));


app.post('/api/watches/:wid/:name', (req, res) => {
  addWatch(req.params.wid, req.params.name, () => {
    res.send('Success creating watch!');
  });
});

app.get('/api/watches/:wid/details', (req, res) => {
  const id = req.params.wid;
  getSpecsForId(id, (specsForId) => {
    res.send(specsForId);
  });
});

app.put('/api/watches/:wid/:detailName=:detail', (req, res) => {
  updateWatch(req.params.wid, req.params.detailName, req.params.detail, () => {
    res.send(`Successfully updated watch ${req.params.detailName}.`);
  });
});

app.delete('/api/watches/:wid/details', (req, res) => {
});

app.listen(3003, () => {
  console.log('Listening on port 3003...');
});
