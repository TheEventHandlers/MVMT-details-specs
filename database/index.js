const mongoose = require('mongoose');
const { Detail } = require('./Detail.js');

// mongoose.connect('mongodb://172.17.0.2/fec', { useNewUrlParser: true });
mongoose.connect('mongodb://localhost/fec', {useNewUrlParser: true });

const getSpecsForId = (id, cb) => {
  Detail.findOne({ _id: id }, (err, document) => {
    if (err) { throw err; }
    cb(document);
  });
};

module.exports.getSpecsForId = getSpecsForId;
