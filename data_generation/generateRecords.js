const mongoose = require('mongoose');
const { Detail } = require('../database/Detail.js');

mongoose.connect('mongodb://localhost/fec', { useNewUrlParser: true });

const names = ['Voyager', 'Bourbon Rose', 'Denali', 'Maverick', 'Mariner', 'Abyss', 'Gold Coast', 'Calypso', 'Thirteen', 'Hustle', 'Joyride', 'Ghost', 'Gotham', 'Avalon'];
const series = ['voyager', 'arc automatic', 'blacktop', 'chrono', 'classic', 'forty', 'modern sport', 'revolver', 'rise'];
const mainPhotos = ['https://s3-us-west-1.amazonaws.com/fecphotos/100-main.png', 'https://s3-us-west-1.amazonaws.com/fecphotos/101-main.png', 'https://s3-us-west-1.amazonaws.com/fecphotos/102-main.png', 'https://s3-us-west-1.amazonaws.com/fecphotos/103-main.png', 'https://s3-us-west-1.amazonaws.com/fecphotos/104-main.png', 'https://s3-us-west-1.amazonaws.com/fecphotos/105-main.png', 'https://s3-us-west-1.amazonaws.com/fecphotos/106-main.png', 'https://s3-us-west-1.amazonaws.com/fecphotos/107-main.png', 'https://s3-us-west-1.amazonaws.com/fecphotos/108-main.png', 'https://s3-us-west-1.amazonaws.com/fecphotos/109-main.png'];
const fitPhotos = ['https://s3-us-west-1.amazonaws.com/fecphotos/100-fit.jpg', 'https://s3-us-west-1.amazonaws.com/fecphotos/101-fit.jpg', 'https://s3-us-west-1.amazonaws.com/fecphotos/102-fit.jpg', 'https://s3-us-west-1.amazonaws.com/fecphotos/103-fit.jpg', 'https://s3-us-west-1.amazonaws.com/fecphotos/104-fit.jpg', 'https://s3-us-west-1.amazonaws.com/fecphotos/105-fit.jpg', 'https://s3-us-west-1.amazonaws.com/fecphotos/106-fit.jpg', 'https://s3-us-west-1.amazonaws.com/fecphotos/107-fit.jpg', 'https://s3-us-west-1.amazonaws.com/fecphotos/108-fit.jpg', 'https://s3-us-west-1.amazonaws.com/fecphotos/109-fit.jpg'];
const caseSizes = [40, 41, 42, 45, 47];
const caseThicknesses = [7, 9, 11, 12, 13.5];
const strapWidths = [20, 21, 22, 23, 24];
const movements = ['Battery powered 5 hand Miyota dual time movement', 'Battery powered 3 hand Miyota quartz', 'Miyota 821A automatic', 'Battery powered 5 hand Miyota with center chronograph hand', 'Battery powered 6 hand chronograph with date', 'Battery powered 3 hand Miyota quartz with date'];
const glasses = ['Hardened mineral crystal', 'Hardened K1 mineral crystal'];
const waterResistances = [3, 5, 7, 10];
const caseDescriptions = ['Brushed smoke stainless steel', 'Matte smoke stainless steel', 'Matte gunmetal stainless steel', 'Brushed black stainless steel', 'Brushed rose gold stainless steel'];
const dials = ['White', 'Grey', 'Black', 'Dark grey'];
const dialDetails = ['Gunmetal hands & markers / Gunmetal second hand', 'Grey hands / Gunmetal markers / Grey second hand', 'Gunmetal hands & markers', 'Gunmetal hands & markers / White second hand', 'Rose gold hands & markers'];
const straps = ['Matte smoke 100% genuine leather', 'Matte smoke stainless steel', 'Caramel leather', 'Black 100% genuine leather'];
const subdials = ['N/A', '2 subdials - dual time zone', '60 minute timer, running seconds', '24 hour clock, 30 minute timer, and 60 second timer'];

const getRandomArrayElement = (arr) => {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
};

const generateAndStoreRecords = () => {
  // hard code watch with id 100 to match all other group members' id 100
  const record100 = {
    _id: 100,
    name: 'Voyager Monochrome',
    series: 'voyager',
    main_photo: 'https://s3-us-west-1.amazonaws.com/fecphotos/100-main.png',
    fit_photo: 'https://s3-us-west-1.amazonaws.com/fecphotos/100-fit.jpg',
    case_size: 42,
    case_thickness: 11,
    strap_width: 21,
    movement: 'Battery powered 5 hand Miyota dual time movement',
    glass: 'Hardened mineral crystal',
    water_resistance: 10,
    case_description: 'Brushed smoke stainless steel',
    dial: 'Grey',
    dial_details: 'Gunmetal hands & markers / Gunmetal second hand',
    strap: 'Matte smoke 100% genuine leather',
    interchangeable_strap: 'Yes',
    subdials: '2 subdials - dual time zone',
  };

  // insert record100
  Detail.create(record100, (err) => {
    if (err) { throw (err); }
  });

  // generate and insert 99 other records
  for (let i = 101; i <= 199; i += 1) {
    const record = {};
    record._id = i;
    record.name = getRandomArrayElement(names);
    record.series = getRandomArrayElement(series);
    record.main_photo = getRandomArrayElement(mainPhotos);
    record.fit_photo = getRandomArrayElement(fitPhotos);
    record.case_size = getRandomArrayElement(caseSizes);
    record.case_thickness = getRandomArrayElement(caseThicknesses);
    record.strap_width = getRandomArrayElement(strapWidths);
    record.movement = getRandomArrayElement(movements);
    record.glass = getRandomArrayElement(glasses);
    record.water_resistance = getRandomArrayElement(waterResistances);
    record.case_description = getRandomArrayElement(caseDescriptions);
    record.dial = getRandomArrayElement(dials);
    record.dial_details = getRandomArrayElement(dialDetails);
    record.strap = getRandomArrayElement(straps);
    record.interchangeable_strap = 'Yes';
    record.subdials = getRandomArrayElement(subdials);
    Detail.create(record, (err) => {
      if (err) { throw err; }
    });
  }
};

const seedDB = () => {
  Detail.deleteMany({}, (err) => {
    if (err) { throw err; }
    generateAndStoreRecords();
  });
};

seedDB();
