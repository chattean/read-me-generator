const { usage, license } = require("../test/test-data");

// Create component function to populate read Me
const generateProjectTitle = projectTitle => {
    if (!projectTitle) {
        return '';
    }
    return `
# ${projectTitle}`;
};

const generateProjectDescription = projectDescription => {
    if (!projectDescription) {
        return '';
    }
    return `
${projectDescription}
    `;
};

const generateInstallationInfo = installInfo => {
    if (!installInfo) {
        return '';
    }
    return `
    ${installInfo}
    `;
};

const generateUsage = usage => {
    if (!usage) {
        return '';
    }
    return `
${usage}
    `;
};
const generateContributing = contributing => {
    if (!contributing) {
        return '';
    }
    return `
${contributing}
    `;
};
const generateTests = tests => {
    if (!tests) {
        return '';
    }
    return `
${tests}
    `;
};
const generateLicenseBadge = license => {
    if (!license) {
        return '';
    }
    if (license == 'MIT') {
        return `
![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)
    `;
    }else if (license == 'GNU GPLv3'){
        return `
![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)
`; 
    }else if (license == 'GNU AGPLv3'){
        return `
![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)
`; 
    }else if (license == 'GNU LGPLv3'){
        return `
![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)
`; 
    }else if (license == 'Mozilla Public License 2.0'){
        return `
![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)
`; 
    }else if (license == 'Apache License 2.0'){
        return `
![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)
`; 
    }else if (license == 'Boost Software License 1.0'){
        return `
![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)
`; 
    }else if (license == 'Unlicense'){
        return `
![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)
`; 
    };
};
const generateLicenseInfo = license => {
    if (!license) {
        return '';
    }
    if (license == 'MIT') {
        return `
### ${license}
A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.
        `;
    } else if (license == 'GNU GPLv3') {
        return `
### ${license}
Permissions of this strong copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights.
`;
    } else if (license == 'GNU AGPLv3') {
        return `
### ${license}
Permissions of this strongest copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. When a modified version is used to provide a service over a network, the complete source code of the modified version must be made available.
`
    } else if (license == 'GNU LGPLv3') {
        return `
### ${license}
Permissions of this copyleft license are conditioned on making available complete source code of licensed works and modifications under the same license or the GNU GPLv3. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. However, a larger work using the licensed work through interfaces provided by the licensed work may be distributed under different terms and without source code for the larger work.
`
    } else if (license == 'Mozilla Public License 2.0') {
        return `
### ${license}
Permissions of this weak copyleft license are conditioned on making available source code of licensed files and modifications of those files under the same license (or in certain cases, one of the GNU licenses). Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. However, a larger work using the licensed work may be distributed under different terms and without source code for files added in the larger work.
`
    } else if (license == 'Apache License 2.0') {
        return `
### ${license}
A permissive license whose main conditions require preservation of copyright and license notices. Contributors provide an express grant of patent rights. Licensed works, modifications, and larger works may be distributed under different terms and without source code.
`
    } else if (license == 'Boost Software License 1.0') {
        return `
### ${license}
A simple permissive license only requiring preservation of copyright and license notices for source (and not binary) distribution. Licensed works, modifications, and larger works may be distributed under different terms and without source code.
`
    } else if (license == 'The Unlicense') {
        return `
### ${license}
A license with no conditions whatsoever which dedicates works to the public domain. Unlicensed works, modifications, and larger works may be distributed under different terms and without source code.
`
    };
};

module.exports = readMEData => {
    const { title, description, installInfo, usage, contributing, tests, license } = readMEData;
    return `
${generateProjectTitle(title)}

${generateLicenseBadge(license)}

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
${generateLicenseInfo(license)}

## Contributing
${generateContributing(contributing)}

## Tests
${generateTests(tests)}

## Questions
# What is my GitHub Name?
${generateGitHubName(githubname)}

# How to get in Contact with me?
${generateEmail(email)}

`
}