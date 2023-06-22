const inquirer = require('inquirer');
const fs = require('fs');
const { Triangle, Circle, Square } = require('./lib/shapes');

// Function to prompt the user for input
function promptUser() {
  return inquirer.prompt([
    {
      type: 'list',
      name: 'shape',
      message: 'Select a shape:',
      choices: ['Triangle', 'Circle', 'Square'],
    },
    {
      type: 'input',
      name: 'color',
      message: 'Enter a color for the shape:',
    },
    {
      type: 'input',
      name: 'text',
      message: 'Enter the logo text:',
    },
  ]);
}

// Function to generate the SVG markup based on user input
function generateSVG(shape, color, text) {
  let shapeObj;

  switch (shape) {
    case 'Triangle':
      shapeObj = new Triangle(color);
      break;
    case 'Circle':
      shapeObj = new Circle(color);
      break;
    case 'Square':
      shapeObj = new Square(color);
      break;
    default:
      console.log('Invalid shape selected.');
      return;
  }

  const svgMarkup = shapeObj.render(text);
  return svgMarkup;
}

// Function to save the SVG markup as an SVG file
function saveSVGFile(filename, svgMarkup) {
  fs.writeFileSync(filename, svgMarkup);
  console.log(`SVG file saved as ${filename}`);
}

// Main function to generate the logo
async function generateLogo() {
  try {
    const userInput = await promptUser();
    const { shape, color, text } = userInput;

    const svgMarkup = generateSVG(shape, color, text);

    const filename = 'logo.svg'; // Provide a suitable filename here
    saveSVGFile(filename, svgMarkup);
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

// Run the logo generation process
generateLogo();
