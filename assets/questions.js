const questions = [
    {
        name: 'github',
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
        message: 'Please write a short description of your project'
    },
    {
        name: 'installation',
        type: 'input',
        message: 'What command should be run to install dependencies?',
        default: 'npm i'
    },
    {
        name: 'usage',
        type: 'input',
        message: 'What does the user need to know about using the repo?'
    },
    {
        name: 'contributing',
        type: 'input',
        message: 'What does the user need to know about contributing to the repo'
    },
    {
        name: 'tests',
        type: 'input',
        message: 'What command should be run to run tests?',
        default: 'npm test'
    },
    {
        name: 'license',
        type: 'list',
        choices: ['MIT', 'Apache license 2.0', 'Mozilla Public License 2.0']

    },
];

module.exports = questions;