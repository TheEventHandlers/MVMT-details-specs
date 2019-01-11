const fs = require('graceful-fs');
const path = require('path');
const json2csv = require('json2csv').parse;
const fields = [
  'id',
  'name',
  'uniqueName',
  'series',
  'main_photo',
  'fit_photo',
  'case_size',
  'case_thickness',
  'strap_width',
  'movement',
  'glass',
  'water_resistance',
  'case_description',
  'dial',
  'dial_details',
  'strap',
  'interchangeable_strap',
  'subdials'];
const optsHeader = { fields, quote: "'" };
const opts = { header: false, quote: "'" };

const names = ['Voyager', 'Bourbon Rose', 'Denali', 'Maverick', 'Mariner', 'Abyss', 'Gold Coast', 'Calypso', 'Thirteen', 'Hustle', 'Joyride', 'Ghost', 'Gotham', 'Avalon'];
const series = ['voyager', 'arc automatic', 'blacktop', 'chrono', 'classic', 'forty', 'modern sport', 'revolver', 'rise'];
const mainPhotos = ['https://s3-us-west-1.amazonaws.com/fecphotos/100-main.png', 'https://s3-us-west-1.amazonaws.com/fecphotos/101-main.png', 'https://s3-us-west-1.amazonaws.com/fecphotos/102-main.png', 'https://s3-us-west-1.amazonaws.com/fecphotos/103-main.png', 'https://s3-us-west-1.amazonaws.com/fecphotos/104-main.png', 'https://s3-us-west-1.amazonaws.com/fecphotos/105-main.png', 'https://s3-us-west-1.amazonaws.com/fecphotos/106-main.png', 'https://s3-us-west-1.amazonaws.com/fecphotos/107-main.png', 'https://s3-us-west-1.amazonaws.com/fecphotos/108-main.png', 'https://s3-us-west-1.amazonaws.com/fecphotos/109-main.png'];
const fitPhotos = ['https://s3-us-west-1.amazonaws.com/fecphotos/100-fit.jpg', 'https://s3-us-west-1.amazonaws.com/fecphotos/101-fit.jpg', 'https://s3-us-west-1.amazonaws.com/fecphotos/102-fit.jpg', 'https://s3-us-west-1.amazonaws.com/fecphotos/103-fit.jpg', 'https://s3-us-west-1.amazonaws.com/fecphotos/104-fit.jpg', 'https://s3-us-west-1.amazonaws.com/fecphotos/105-fit.jpg', 'https://s3-us-west-1.amazonaws.com/fecphotos/106-fit.jpg', 'https://s3-us-west-1.amazonaws.com/fecphotos/107-fit.jpg', 'https://s3-us-west-1.amazonaws.com/fecphotos/108-fit.jpg', 'https://s3-us-west-1.amazonaws.com/fecphotos/109-fit.jpg'];
const caseSizes = [40, 41, 42, 45, 47];
const caseThicknesses = [7, 9, 11, 12, 13];
const strapWidths = [20, 21, 22, 23, 24];
const movements = ['Battery powered 5 hand Miyota dual time movement', 'Battery powered 3 hand Miyota quartz', 'Miyota 821A automatic', 'Battery powered 5 hand Miyota with center chronograph hand', 'Battery powered 6 hand chronograph with date', 'Battery powered 3 hand Miyota quartz with date'];
const glasses = ['Hardened mineral crystal', 'Hardened K1 mineral crystal'];
const waterResistances = [3, 5, 7, 10];
const caseDescriptions = ['Brushed smoke stainless steel', 'Matte smoke stainless steel', 'Matte gunmetal stainless steel', 'Brushed black stainless steel', 'Brushed rose gold stainless steel'];
const dials = ['White', 'Grey', 'Black', 'Dark grey'];
const dialDetails = ['Gunmetal hands & markers / Gunmetal second hand', 'Grey hands / Gunmetal markers / Grey second hand', 'Gunmetal hands & markers', 'Gunmetal hands & markers / White second hand', 'Rose gold hands & markers'];
const straps = ['Matte smoke 100% genuine leather', 'Matte smoke stainless steel', 'Caramel leather', 'Black 100% genuine leather'];
const subdials = ['N/A', '2 subdials - dual time zone', '60 minute timer\\\, running seconds', '24 hour clock\\\, 30 minute timer\\\, and 60 second timer'];

const getRandomArrayElement = (arr) => {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
};

let firstFile = {
  id: 100,
  name: 'Voyager Monochrome',
  uniqueName: 'watch100',
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
let startTime = Date.now();
fs.appendFile(path.join(__dirname, `/seedData1.csv`), json2csv(firstFile, optsHeader));

const generateCSVRecord = (id, recordsPerFile) => {
  const record = {};
  record.id = id;
  record.name = getRandomArrayElement(names);
  record.uniqueName = `watch${id}`;
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
  if ((i - 101) % recordsPerFile === 0) {
    return (json2csv(record, optsHeader) + '\n');
  } else {
    return (json2csv(record, opts) + '\n');
  }
}

let j = 2;
let i = 101;

const writeRecords = (numRecords, recordsPerFile) => {
  let fileWriteStream = fs.createWriteStream(path.join(__dirname, `/seedData${j}.csv`));
  const write = () => {
    if ((i - 101) % recordsPerFile === 0) {
      fileWriteStream = fs.createWriteStream(path.join(__dirname, `/seedData${j}.csv`));
      j++;
      console.log(`${(i / (numRecords + 100)) * 100}% complete.`);
      console.log(`Time elapsed: ${(Date.now() - startTime) / 1000} seconds.`)
    }
    if (i >= numRecords + 100) {
      console.log('Complete!');
      console.log(`Time elapsed: ${(Date.now() - startTime) / 1000} seconds.`)
      return;
    }
    const okayToWrite = fileWriteStream.write(generateCSVRecord(i, recordsPerFile));
    if (okayToWrite) {
      i++;
      write();
    } else {
      fileWriteStream.once('drain', () => {
        write();
      })
    }
  }
  write();
};
writeRecords(10000000, 1000000);
