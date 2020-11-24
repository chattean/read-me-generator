const generatePage = require('./src/readme-template');
const { writeFile } = require('./utils/generate-readme');

const testData = require('./test/test-data');

writeFile(generatePage(testData))
  .then(res => {
    console.log(res);
    console.log('All Done!');
  })
  .catch(err => {
    console.log(err);
  });