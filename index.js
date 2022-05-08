// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");



// An array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is your project name?",
    validate: (titleInput) => {
      if (titleInput) {
        return true;
      } else {
        console.log("Please enter your project name!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "description",
    message: "Give a detailed description?",
    validate: (descriptionInput) => {
      if (descriptionInput) {
        return true;
      } else {
        console.log("Please enter a description of your project!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "tableOfContents",
    message: "Table of Content (Press Enter)",    
  },
  {
    type: "input",
    name: "installation",
    message: "What dependencies did you use for this project? (If None, Press Enter)",   
  },
  {
    type: "input",
    name: "usage",
    message: "What are the step taken for this app to be used?",
    validate: (usageInput) => {
      if (usageInput) {
        return true;
      } else {
        console.log("Please enter the steps needed to use this app");
        return false;
      }
    },
  },
  {
    type: "list",
    name: "license",
    message: "What license is needed?",
    choices: ['None', 'MIT', 'Apache', 'Boost', 'BDS 3-Clause'],
    validate: (licenseInput) => {
      if (licenseInput)  {
        return true;
      } else {
        console.log("Please enter a license!");
        return false;
      } 
    },
  },
  {
    type: "input",
    name: "contributions",
    message: "Who contributed to this project?",
    validate: (contributionsInput) => {
      if (contributionsInput) {
        return true;
      } else {
        console.log("Please enter contributors!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "test",
    message: "How did you test your application?"  
  },
  {
    type: "input",
    name: "github",
    message: "What is your Github username?",
    validate: (githubInput) => {
      if (githubInput) {
        return true;
      } else {
        console.log("Please enter your Github username!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "email",
    message: "What is your email?",
    validate: (emailInput) => { 
      if (emailInput) {
        return true;
      } else {
        console.log("Please enter your email address!");
        return false;
      }
    },
  }
  
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err) {
        console.log(data), 
        err ? console.log(err) : console.log('README.md succesfully created!');
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(data) {
        writeToFile('README.md', generateMarkdown(data));
        console.log(data.license);
    })
}

// Function call to initialize app
init();


