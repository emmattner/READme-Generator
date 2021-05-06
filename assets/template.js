const template = function(answer)
{
const templateReadme = 
`# ${answer.projectName}

## Description
${answer.description}
    
## Installation
${answer.installation}

## Usage
${answer.usage}

## Contributing
${answer.contributing}

## Tests
${answer.tests}

## License
[![License: ${answer.licensing}]((https://img.shields.io/badge/License-${answer.licensing}-green.svg)](https://opensource.org/licenses/${answer.licensing})`;


    return templateReadme;
}
module.exports = template;