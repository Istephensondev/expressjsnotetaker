// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

// Internal modules
const generateMarkdown = require('./Develop/utils/generateMarkdown.js');


// TODO: Create an array of questions for user input
const questions = [
// Github Username:
{ type: 'input',
  name: 'username',
  message: 'Enter your GitHub username:',
validate: function (answer) {
    if (answer.length<1) {
        return console.log("You must enter a GitHub username.");
    }
    return true;
  }
},
// GitHub Repo
{
    type: 'input',
    name: 'Repository',
    message: "Enter the name of your GitHub Reopsitory:",
    validate: function (answer) {
        if (answer.length < 1)  {
            return console.log("You must enter the name of your GitHub Repository.")
        }
        return true;
    }
},
// Title of Project
{
    type: 'input',
    name: 'title',
    message: 'Enter the title of your project:',
    validate: function (answer) {
        if (answer.length < 1) {
            return console.log("You must enter the title of your project.")
        }
        return true;
    }
},
// Project Description
{
    type: 'input',
    name:'description',
    message:'Entere a description of your project:',
    validate: function (answer) {
        if (answer.length < 1) {
            return console.log("You must enter a description of your project.")
        }
        return true;
    }
},
// Project contribution
{
    type: 'input',
    name:'contribution',
    message:'Explain how users can contribute to your project (if necessary):',
},
// Project isntallation
{
    type: 'input',
    name:'contribution',
    message:'Explain how user would install for installation section (if necessary):', 
},
// Liscense
{
    type: 'list',
    name: 'license',
    message: 'Choose your license for your project.',
    choices: ['afl-3.0', 'apache-2.0', 'artistic-2.0', 'bsl-1.0', 'bsd-2-clause', 'bsd-3-clause', 'bsd-3-clause-clear', 'cc', 'cc0-1.0', 'cc-by-4.0', 'cc-by-sa-4.0', 'wtfpl', 'ecl-2.0', 'epl-1.0', 'epl-2.0', 'eupl-1.1', 'agpl-3.0', 'gpl', 'gpl-2.0', 'gpl-3.0', 'lgpl', 'lgpl-2.1', 'lgpl-3.0', 'isc', 'lppl-1.3c', 'ms-pl', 'mit', 'mpl-2.0', 'osl-3.0', 'postgresql', 'ofl-1.1', 'ncsa', 'unlicense', 'zlib'],
    
},
// Usage of project
{
    type: 'input',
    name: 'usage',
    message: 'Enter your project instructions and examples of project in use for Usage Section.',
},
// Test for Project
{
    type: 'input',
    name: 'tests',
    message: 'Provide tests for project, and explain how to test (if necessary):',
},
];
// // TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.log(err);
        }
        console.log('Your markdown file has been created.')
    });
}

const writeFileAsync = util.promisify(writeToFile);
// // TODO: Create a function to initialize app
async function init() {
    try {

        // Prompt Inquirer questions
        const userResponses = await inquirer.prompt(questions);
        console.log("Your responses: ", userResponses);
        console.log("Thank you for your responses! Fetching your GitHub data next...");
    

     // Pass Inquirer userResponses and GitHub userInfo to generateMarkdown
        console.log("Generating your README next...")
        const markdown = generateMarkdown(userResponses, userInfo);
        console.log(markdown);
    
        // Write markdown to file
        await writeFileAsync('ExampleREADME.md', markdown);

    } catch (error) {
        console.log(error);
    }
};
// Function call to initialize app
init();
