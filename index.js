  const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Triangle, Square } = require('./lib/shapes');

async function main() {
  const answers = await inquirer.prompt([
    { name: 'text', message: 'Enter text for the logo (up to 3 characters):' },
    { name: 'textColor', message: 'Enter text color:' },
    { name: 'shapeType', type: 'list', choices: ['Circle', 'Triangle', 'Square'], message: 'Choose a shape:' },
    { name: 'shapeColor', message: 'Enter shape color:' }
  ]);

  let shape;
  if (answers.shapeType === 'Circle') shape = new Circle();
  else if (answers.shapeType === 'Triangle') shape = new Triangle();
  else shape = new Square();
  
  shape.setColor(answers.shapeColor);

  const svgContent = `
<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  ${shape.render()}
  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${answers.textColor}">${answers.text}</text>
</svg>
  `;

  fs.writeFileSync('./examples/logo.svg', svgContent.trim());
  console.log('Generated logo.svg');
}

main();
