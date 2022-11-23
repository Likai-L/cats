const fs = require('fs');

const breedDetailsFromFile = function(breed, callbackWhenDone) {
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    console.log("In readFile's Callback: it has the data.");
    if (!error) callbackWhenDone(data);
    if (error) callbackWhenDone(undefined);
  });
};

module.exports = breedDetailsFromFile;

