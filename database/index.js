const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/fec', { useNewUrlParser: true });

const detailSchema = new mongoose.Schema({
  _id: Number,
  name: String,
  series: String,
  main_photo: String,
  fit_photo: String,
  case_size: Number,
  case_thickness: Number,
  strap_width: Number,
  movement: String,
  glass: String,
  water_resistance: Number,
  case_description: String,
  dial: String,
  dial_details: String,
  strap: String,
  interchangeable_strap: String,
  subdials: String,
});

const Detail = mongoose.model('Detail', detailSchema);

const getSpecsForId = (id, cb) => {
  Detail.findOne({ _id: id }, (err, document) => {
    if (err) { throw err; }
    cb(document);
  });
};

module.exports.getSpecsForId = getSpecsForId;
