const inquirer = require('inquirer');
const fs = require('fs');
const { Triangle, Circle, Square } = require('./lib/shapes');


function promptUser() {
  return inquirer.prompt([
    {
      type: 'list',
      name: 'shape',
      message: 'Choose a shape:',
      choices: ['Triangle', 'Circle', 'Square'],
    },
    {
      type: 'input',
      name: 'color',
      message: 'Pick a color for the shape:',
    },
    {
      type: 'input',
      name: 'text',
      message: 'Enter the logo text:',
    },
  ]);
}

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


function saveSVGFile(filename, svgMarkup) {
  fs.writeFileSync(filename, svgMarkup);
  console.log(`SVG file saved as ${filename}`);
}


async function generateLogo() {
  try {
    const userInput = await promptUser();
    const { shape, color, text } = userInput;

    const svgMarkup = generateSVG(shape, color, text);

    const filename = 'logo.svg'; 
    saveSVGFile(filename, svgMarkup);
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

generateLogo();
