const questions = [
    {
        name: 'gitHub',
        type: 'input',
        message: 'What is your GitHub username?'

    },
    {
        name: 'email',
        type: 'input',
        message: 'What is your email address?'

    },
    {
        name: 'projectName',
        type: 'input',
        message: 'Whats the name of your project?'

    },
    {
        name: 'description',
        type: 'input',
        message: 'Description of your project?'
    },
    {
        name: 'installation',
        type: 'input',
        message: 'Provide installation instructions'

    },
    {
        name: 'usage',
        type: 'input',
        message: 'Input usage infomration'

    },
    {
        name: 'contributing',
        type: 'input',
        message: 'Contribution quidelines'

    },
    {
        name: 'tests',
        type: 'input',
        message: 'Test instructions',
        default: 'npm test'
    },
    {
        name: 'license',
        type: 'list',
        choices: ['MIT', 'Apache license 2.0', 'Mozilla Public License 2.0']

    },
];

module.exports = questions;