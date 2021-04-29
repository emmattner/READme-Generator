const { fstat } = require('fs');
const { prompt } = require('inquirer');
const { questions } = require('./assets/questions');
const { template } = require('./assets/utils')

prompt(questions).then((answers) => {
    console.log(answers);

    const name =createFileName(answers.projectName)

    fs.writeFile(`./${name}.html`, template(answers), `utf8`, () => {
        console.log(`Successfully created ${name}.html file.`)
    })
})