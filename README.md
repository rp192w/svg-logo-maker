
# SVG Logo Maker

## Overview

This repository contains the code for a Node.js command-line application that generates a simple SVG logo based on user inputs. The application allows users to input text, text color, shape type, and shape color to create a personalized SVG logo. The generated logo is saved as `logo.svg`.

## Task

Your task is to build this Node.js command-line application, ensuring it meets the following acceptance criteria:

### User Story

```md
AS a freelance web developer
I WANT to generate a simple logo for my projects
SO THAT I don't have to pay a graphic designer
```

### Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for text
THEN I can enter up to three characters
WHEN I am prompted for the text color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I am prompted for a shape
THEN I am presented with a list of shapes to choose from: circle, triangle, and square
WHEN I am prompted for the shape's color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I have entered input for all the prompts
THEN an SVG file is created named `logo.svg`
AND the output text "Generated logo.svg" is printed in the command line
WHEN I open the `logo.svg` file in a browser
THEN I am shown a 300x200 pixel image that matches the criteria I entered
```

## Link to Walkthrough Video

[Walkthrough Video](#) (Replace with your actual video link)

## File Structure

### JavaScript Files

- **index.js**: The main file that runs the application, handles user inputs using `inquirer`, generates the SVG content, and writes it to a file.
- **lib/shapes.js**: Contains the `Shape` class and its subclasses (`Circle`, `Triangle`, `Square`) which define the `render()` methods for SVG shapes.
- **lib/shapes.test.js**: Contains Jest tests for the shape classes to ensure they generate the correct SVG elements.

### JSON Files

- **package.json**: Manages project dependencies (`inquirer` and `jest`) and scripts.

### Other Files

- **.gitignore**: Specifies which files and folders Git should ignore (e.g., `node_modules`, `logo.svg`).

## Setup and Running

### Prerequisites

- Node.js installed on your machine.

### Installation

1. Clone the repository:
    ```bash
    git clone <repository-url>
    cd svg-logo-maker
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

### Running the Application

Run the application using the following commands:
```bash
npm install
node index.js
```

Follow the prompts to enter the text, text color, shape type, and shape color. The generated SVG logo will be saved as `logo.svg`.

### Running Tests

To run the tests using Jest, use the following command:
```bash
npm test
```

## Known Issues

- **Color Validation**: Ensure the colors entered are valid color keywords or hexadecimal values.
- **Text Length**: Only up to three characters are allowed for the text input.

## Screenshots

![SVG Logo Maker Screenshot](./assets/images/screenshot.png) (Replace with your actual screenshot)

## Helpful Resources

- [Inquirer.js Documentation](https://www.npmjs.com/package/inquirer)
- [Jest Documentation](https://jestjs.io/)
- [SVG Tutorial](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial)

## License

This project is licensed under the MIT License.
