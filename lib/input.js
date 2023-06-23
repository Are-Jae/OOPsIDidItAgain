const inquirer = require('inquirer');

async function getUserInput() {
  const shapeQuestion = {
    type: 'list',
    name: 'shape',
    message: 'Choose a shape:',
    choices: ['Triangle', 'Circle', 'Square'],
  };

  const colorQuestion = {
    type: 'input',
    name: 'color',
    message: 'Pick a color for the shape:',
  };

  const textQuestion = {
    type: 'input',
    name: 'text',
    message: 'Enter the logo text:',
  };

  const { shape, color, text } = await inquirer.prompt([
    shapeQuestion,
    colorQuestion,
    textQuestion,
  ]);

  return { shape, color, text };
}

module.exports = { getUserInput };
