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
## Description
${projectDescription}
    `;
};


module.exports = readMEData =>{
    const{title,description} = readMEData;

    return `
${generateProjectTitle(title)}

${generateProjectDescription(description)}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#test)
* [Questions](#questions)
    `;
};