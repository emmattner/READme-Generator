const { log } = require('console');
const fs = require('fs');
const inquirer = require('inquirer');
const questions  = require('./assets/questions');
const template = require('./assets/template');

inquirer.prompt(questions).then((answers) => {
    console.log(answers);

    fs.writeFile(`./readme.md`, template(answers), `utf8`, () => {
        console.log(`Successfully created readme file.`)
    });
});