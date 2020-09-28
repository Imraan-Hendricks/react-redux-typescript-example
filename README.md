# react-redux-typescript-example

This project serves as an example of how to use react with redux and typescript. The project includes the configuration of redux, redux persist and relevant redux middlewares.

To demonstrate how to fetch data using common redux practice combined with react hooks, an async-req component has been created where data is requested from JSON placeholder. The received data will be displayed and will include functionality to reset.

To demonstrate the usage of redux persist, a note taking component has been created which allows the user to add and remove notes. These notes will be stored in local storage, so when the user reloads the application the notes data will persist automatically and remain intact. A reset button is also provided to clear all notes.

### Features include:

- async fetch request with and without redux thunk
- react structure for applications using redux and typescript
- react router
- redux configuration to manage global state
- redux middlewares including devtools, logger and thunk
- redux persist to handle local storage
- redux reducers structure to manage reducers

### Requirements:

- node js v12 (current version: 12.18.0)

### Usage:

- clone repository or download source code
- open project directory in terminal
- run npm install
- run npm start
