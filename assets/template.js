const template = function(answer)
{
    const templateReadme = 
    `#${answer.title}

    ##${answer.description}
    
    ##${answer.installationProcess}
    
    ##${answer.usage}
    
    ##${answer.contributing}
    
    ##${answer.tests}
    
    ##${answer.licensing}`;

    return templateReadme;
}
module.exports = template;