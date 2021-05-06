const fs = require('fs');
const template = require('./template');

const writeFile = (fileName, data) => {
    fs.writeFile(fileName, data, template(answers), 'utf8', () => {
        console.log('Successfully created ${projectName}.readme file')
    })
}

module.exports = {
    writeFile
}