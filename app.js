// Setting up NPM packages that we will be using, in this case just Inquirer
const inquirer = require('inquirer');

// Getting the ReadMe Template
const generateReadME = require('./src/readme-template');

// pointing to the JS script to create the Read Me file
const {writeFile} = require('./utils/generate-readme');

// prompting user for question to anwer the readme generation
const promptUser = () => {
    return inquirer.prompt([
    // Project Title  
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
      // Project Description
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
      // Installation Info
      {
        type: 'input',
        name: 'installInfo',
        message: 'What are the steps required to install your project?(Required)',
        validate: installInfo => {
          if (installInfo) {
            return true;
          } else {
            console.log('Please enter Installation Info');
            return false;
          }
        }
      },
      // Usage
      {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use(Required)',
        validate: usage => {
          if (usage) {
            return true;
          } else {
            console.log('Please enter usage Info');
            return false;
          }
        }
      },
      // Contributing
      {
        type: 'input',
        name: 'contributing',
        message: 'Add guidelines for other users to contribute to your project(Required)',
        validate: contributing => {
          if (contributing) {
            return true;
          } else {
            console.log('Please enter contributing Info');
            return false;
          }
        }
      },
      // Tests
      {
        type: 'input',
        name: 'tests',
        message: 'write out the tests for your Application(Required)',
        validate: tests => {
          if (tests) {
            return true;
          } else {
            console.log('Please enter testing Info');
            return false;
          }
        }
      },
      // License
      {
        type: 'checkbox',
        name: 'license',
        message: 'Please choose a license for your project',
        choices: ['MIT', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
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


