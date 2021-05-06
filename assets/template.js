const template = function(answer)
{
const templateReadme = 
`# ${answer.projectName}

## Description
${answer.description}

## Table of Contents
1. [Installation](#Installation)
2. [Usage](#Usage)
3. [Contributing](#Contributing)
4. [Tests](#Tests)
5. [License](#License)

## Installation
${answer.installation}

## Usage
${answer.usage}

## Contributing
${answer.contributing}

## Tests
${answer.tests}

## License
[![License: ${answer.licensing}]((https://img.shields.io/badge/License-${answer.licensing}-green.svg)](https://opensource.org/licenses/${answer.licensing})

## Questions
​
If you have any questions about the repo, open an issue or contact me directly at ${answer.email}. You can find more of my work at [${answer.github}](https://github.com/${answer.github}/).`;
    return templateReadme;
}
module.exports = template;