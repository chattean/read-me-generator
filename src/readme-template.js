const { usage } = require("../test/test-data");

// Create component function to populate read Me
const generateProjectTitle = projectTitle =>{
    if (!projectTitle){
        return '';
    }
    return `
# ${projectTitle}`;
};

const generateProjectDescription = projectDescription =>{
    if (!projectDescription){
        return '';
    }
    return `
${projectDescription}
    `;
};

const generateInstallationInfo = installInfo =>{
    if (!installInfo){
        return '';
    }
    return `
    ${installInfo}
    `;
};

const generateUsage = usage =>{
    if (!usage){
        return '';
    }
    return `
${usage}
    `;
};
const generateContributing = contributing =>{
    if (!contributing){
        return '';
    }
    return `
${contributing}
    `;
};
const generateTests = tests =>{
    if (!tests){
        return '';
    }
    return `
${tests}
    `;
};


module.exports = readMEData =>{
    const{title,description, installInfo, usage, contributing, tests} = readMEData;
    return `
${generateProjectTitle(title)}

## Description
${generateProjectDescription(description)}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation
${generateInstallationInfo(installInfo)}

## Usage
${generateUsage(usage)}

## License

## Contributing
${generateContributing(contributing)}

## Tests
${generateTests(tests)}

## Questions

`
};