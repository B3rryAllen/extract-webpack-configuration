# ExtractWebpackConfiguration

This project is a simple Angular application that includes a custom Webpack configuration. 

The custom configuration is designed to extract and save the final Webpack configuration used by Angular during the build process into a file named `full-webpack-config-output.json`.

## Features

- **Angular Framework**: Built with Angular for modern web development.
- **Custom Webpack Configuration**: Extends the default Angular Webpack configuration to output the fully resolved configuration.
- **Configuration Output**: Saves the final Webpack configuration to `full-webpack-config-output.json` for inspection or debugging purposes.

## How It Works

The custom Webpack configuration intercepts the Angular build process, extracts the fully resolved Webpack configuration, and writes it to a JSON file. This can be useful for understanding how Angular's Webpack configuration is structured or for debugging customizations.

## Development Server

Run `ng serve` to start the development server. Navigate to `http://localhost:4200/`. The application will automatically reload if you make changes to the source files.

## Building the Project

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. During the build process, the final Webpack configuration will be saved to `webpack-config-output.json`.

## Custom Webpack Configuration

The custom Webpack configuration is implemented in the `webpack.config.ts` file. It uses the Webpack API to extract the resolved configuration and writes it to the output file.

## Running Unit Tests

Run `ng test` to execute the unit tests using [Karma](https://karma-runner.github.io).

## Prerequisites

- **Node.js**: Ensure you have Node.js installed.
- **Yarn**: Use Yarn to manage dependencies.
- **Angular CLI**: Install the Angular CLI globally using `npm install -g @angular/cli`.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/B3rryAllen/extract-webpack-configuration.git
