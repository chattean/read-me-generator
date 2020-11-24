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


module.exports = readMEData =>{
    const{title,description, installInfo, usage} = readMEData;
    return `
${generateProjectTitle(title)}

## Description
${generateProjectDescription(description)}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#test)
* [Questions](#questions)

## Installation
${generateInstallationInfo(installInfo)}

## Usage
${generateUsage(usage)}

`
};