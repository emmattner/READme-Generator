const questions = [
    {
        name: 'projectName',
        type: 'input',
        message: 'Whats the name of your project?'

    },
    {
        name: 'Description',
        type: 'input',
        message: 'Description of your project?'
    },
    {
        name: 'Installation',
        type: 'input',
        message: 'Provide installation instructions'

    },
    {
        name: 'Usage',
        type: 'input',
        message: 'Input usage infomration'

    },
    {
        name: 'Contributing',
        type: 'input',
        message: 'Contribution quidelines'

    },
    {
        name: 'Tests',
        type: 'input',
        message: 'Test instructions'

    },
    {
        name: 'Licensing',
        type: 'list',
        choices: ['MIT', 'Apache license 2.0', 'Mozilla Public License 2.0']

    },
];

module.exports = {
    questions,
};