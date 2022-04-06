// TODO: Include packages needed for this application
let inquirer = require("inquirer")

let fs = require("fs")
// TODO: Create an array of questions for user input
const questions = [{
	type: 'input',
	name: 'title',
	message: 'What is the title of your project? ',
	validate: validation
},
{
	type: 'input',
	name: 'description',
	message: 'Please provide a desciption for your project.',
	validate: validation
},
{
	type: 'input',
	name: 'installation',
	message: 'Please provide instructions as to how users can install your application.',
	validate: validation
},
{
	type: 'input',
	name: 'usage',
	message: 'How can users use your application?',
	validate: validation
},
{
	type: 'input',
	name: 'collaborators',
	message: 'Did you work with anyone else on this project? If so, who?',
	validate: validation
},
{
	type: 'list',
	name: 'license',
	message: 'Choose a license for your project.',
    choices: ["Apache 2.0",
    "BSD 3-Clause",
    "BSD 2-Clause",
    "GNU GPL v3",
    "GNU GPL v2",
    "GNU AGPL v3",
    "GNU LGPL v3",
    "GNU FDL v1.3",
    "MIT",
    "MPL 2.0"],
},
{
	type: 'input',
	name: 'features',
	message: 'List the features your application provides.',
	validate: validation
},
{
	type: 'input',
	name: 'contributions',
	message: 'How can others contirbute to your project?',
	validate: validation
},
{
	type: 'input',
	name: 'email',
	message: 'What is your email?',
	validate: validation
},
{
	type: 'input',
	name: 'github',
	message: 'What is your github username?',
	validate: validation
},
];

function validation(response) {
    // Make sure the response exists
	let valid = response ? true : 'This response is required! Try again!'
	return valid;
};


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
fs.writeFile(fileName, data, (error)=> {
    error ? console.log(error) : console.log("success")
})

}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((response) => {
      generateMDFile(response)
    });
}

// Function call to initialize app
init();


function generateMDFile(data) {
console.log(data)
let title = data.title;
let description = data.desciption;
let installation = data.installation;
let usage = data.usage;
let collaborators = data.collaborators;
let license = data.license;
let features = data.features;
let contributions = data.contributions;
let email = data.email;
let github = data.github;

const MDText = `
# ${title}

## Description

${description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Features](#features)
- [Questions](#questions)

## Installation

${installation}

## Usage

${usage}

## Credits

${collaborators}

## License

${license}

## Features

${features}

## Contribute

${contributions}

## Questions

GitHub: [${github}](https://www.github.com/${github})

Email: [${email}](mailto:${email})
`
writeToFile("./readme.md", MDText)


}

