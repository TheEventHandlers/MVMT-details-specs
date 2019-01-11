const path = require('path');
const cassandra = require('cassandra-driver');

const client = new cassandra.Client({ contactPoints: ['127.0.0.1'], localDataCenter: 'datacenter1', keyspace: 'sdc' });
client.connect((err) => {
  if (err) { throw err; }
  console.log('Connected!');
});

// const copyQuery = 'COPY Detail(id, name, uniqueName, series, main_photo, fit_photo, case_size, case_thickness, strap_width, movement, glass, water_resistance, case_description, dial, dial_details, strap, interchangeable_strap, subdials) FROM ? WITH HEADER = TRUE'

// const seedQueries = [
//   { query: copyQuery, params: [path.join(__dirname, '../../data_generation/seedData1.csv')] },
//   { query: copyQuery, params: [path.join(__dirname, '../../data_generation/seedData2.csv')] },
//   { query: copyQuery, params: [path.join(__dirname, '../../data_generation/seedData3.csv')] },
//   { query: copyQuery, params: [path.join(__dirname, '../../data_generation/seedData4.csv')] },
//   { query: copyQuery, params: [path.join(__dirname, '../../data_generation/seedData5.csv')] },
//   { query: copyQuery, params: [path.join(__dirname, '../../data_generation/seedData6.csv')] },
//   { query: copyQuery, params: [path.join(__dirname, '../../data_generation/seedData7.csv')] },
//   { query: copyQuery, params: [path.join(__dirname, '../../data_generation/seedData8.csv')] },
//   { query: copyQuery, params: [path.join(__dirname, '../../data_generation/seedData9.csv')] },
//   { query: copyQuery, params: [path.join(__dirname, '../../data_generation/seedData10.csv')] },
//   { query: copyQuery, params: [path.join(__dirname, '../../data_generation/seedData11.csv')] }
// ];

// client.batch(seedQueries, { prepare: false })
//   .then(() => {
//     // All queries have been executed successfully
//     console.log('Successfully seeded!');
//   })
//   .catch((err) => {
//     // None of the changes have been applied
//     throw err;
//   });

// client.batch(seedQueries, { prepare: true }, (err) => {
//   // All queries have been executed successfully
//   // Or none of the changes have been applied, check err
//   if (err) { throw err; }
//   console.log('Sucessfully seeded!');
// });