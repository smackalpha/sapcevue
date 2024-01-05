# SpaceVue  Documentation

## Table of Contents
- [Introduction](#introduction)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Project Structure](#project-structure)
- [Development](#development)
  - [Design Mockup](#design-mockup)
  - [Implementation](#implementation)
- [Technologies Used](#technologies-used)
- [Features](#features)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Introduction
SpaceVue is a dashboard application designed for monitoring space missions. It displays recent space mission data, including mission names, launch companies, locations, dates, times, rocket types, prices, and mission outcomes.

## Getting Started

### Prerequisites
- Node.js and npm installed on your machine.

### Installation
1. Clone the repository:

   ```bash
   git clone https://github.com/Afshana77/space-vue.git

Navigate to the project directory:
cd spacevue


### Install dependencies:
npm install

### Project Structure
The project follows a standard structure:

spacevue/
|-- public/
|-- src/
|   |-- components/
|   |   |-- Login.js
|   |   |-- Login.css
|   |   |-- Dashboard.css
|   |   |-- Dashboard.js
|   |-- App.js
|   |-- App.css
|   |-- index.js
|-- .gitignore
|-- package.json
|-- README.md
|-- (Other configuration files)


### Development
Design Mockup
Create a low-fidelity mockup of the dashboard using a design tool such as Figma or Sketch. The mockup should indicate the placement of AG-Grid tables and charts.

### Implementation
* Implement a mock login page with a simple form and hardcoded login functionality.
* Build a dashboard with React using AG-Grid to display space missions in a tabular format.
* Create at least one chart displaying data from the missions (e.g., a pie chart showing the proportion of successful missions).
### Technologies Used
React.js
AG-Grid
Chart.js
(Include any other libraries or tools used)
### Features
User authentication with a mock login page.
Display of space mission data using AG-Grid.
Visualization of mission outcomes with charts.
Usage
### Run the development server:
npm start

### This will start the application on http://localhost:3000.

Contributing
Fork the project.
Create a new branch: git checkout -b feature-name.
Commit your changes: git commit -m 'Add some feature'.
Push to the branch: git push origin feature-name.
Submit a pull request.