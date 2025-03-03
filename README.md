React FilePad: File Explorer & Editor built with Clean Architecture Principles

This project showcases a File Explorer & Editor developed using React, adhering to the principles of clean architecture. By employing a layered code structure, the application becomes more manageable and facilitates effective testing. Leveraging Redux Toolkit for state management enhances performance and simplifies implementation. This example serves as a valuable reference for structuring React applications in accordance with Clean Architecture principles, empowering developers to build robust and scalable software solutions.

## Features

- [x] Create New Folder and File
- [x] Monaco Editor Supported
- [x] Download File
- [ ] Lexical Editor Supported
- [ ] Excalidraw Whiteboard Supported
- [ ] Download Folder
- [ ] Export File to PDF
- [ ] Export Folder to PDF
- [ ] Open Local File
- [ ] Open Local Folder

## Tech Stack

- ReactJS
- Redux Toolkit
- TypeScript
- Sass
- Ant Design

## Environment Setup
- Download and install [Git](https://git-scm.com/downloads)
- Download and install [Node.js](https://nodejs.org/en/download/)
## Run Locally

Clone the project

```bash
  git clone https://github.com/jhasuraj01/filepad.git
```

Go to the project directory

```bash
  cd filepad
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```


## Folder Structure

The directory structure of the project is organized according to the principles of clean architecture. The project is divided into four main layers:

#### Presentation Layer
This layer is responsible for rendering the user interface and handling user interactions. It consists of the presentation directory and its subdirectories.

#### Domain Layer
This layer contains the business logic of the application. It consists of the domain directory and its subdirectories.

#### Infrastructure Layer
This layer provides the implementation details for the abstractions defined in the domain layer. It consists of the infrastructure directory and its subdirectories.

#### Adapters Layer
This layer provides the interfaces between the application and external systems. It consists of the adapters directory and its subdirectories.
## Screenshots

This project is an example of how to structure a React application following the Clean Architecture principles. By separating the code into different layers, it becomes easier to maintain and test the application. The use of Redux Toolkit simplifies the implementation of state management and improves the performance of the application.
