// Setting up NPM packages that we will be using, in this case just Inquirer
const inquirer = require('inquirer');

// Getting the ReadMe Template
const generateReadME = require('../src/readme-template');

const {writeFile} = require('../utils/generate-readme');

// prompting user for question to anwer the readme generation
const promptUser = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'title',
        message: 'What is your Project Name? (Required)',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('Please enter your project name!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'description',
        message: 'Enter Project description(Required)',
        validate: descriptionInput => {
          if (descriptionInput) {
            return true;
          } else {
            console.log('Please enter Project Description');
            return false;
          }
        }
      },
    ]);
};

promptUser()
    .then(readMEData => {
        console.log(readMEData);
        return generateReadME(readMEData);
    })
    .then(readMEPage => {
        return writeFile(readMEPage);
    })
    .catch(err =>{
        console.log(err);
    });


