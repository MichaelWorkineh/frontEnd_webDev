# React Side-project Documentation

## Content
1. About the project
2. Functionality
3. File explanation
4. React Login Component Documentation
5. React Registerer Component Documentation
6. React Testing Component Documentation
7. Express Server Documentation

## About the project
this project was intended for pracatisng the fundamental concepts of react. It was developed in 5 days as a means of practising react. It will be revisited as after a while to increase its efficency and clarity. It was successful in challenging: my understanding, designing abilities as well as delivering a product with in a deadline 

## Functionality
This project has the following functionality:
- has a login page where pre registered user can logi with
- has a registration page that allows new users to be registered (it actualy changes the json file for them to login after wards)
- has a profile page that shows a users full name, age, sex, email, country and id

## How to run the file
1. enter `node server.js` command on a terminal
2. enter `npx json-server --watch UserData.json --port 9000` command on a different terminal
3. enter `npm start` command on another terminal.

Note:
- in total there should be three different terminals running one of these commands
- MAKE SURE THAT YOUR FIFLE DIRECTORY IS INSIDE 'src'

## React Login Component Documentation
This section provides an overview of the React login component code and its functionalities.
### Installation
 You need to install the axios package as a project dependency using npm or yarn. Run the following command in your project directory:
 `npm install axios` or `yarn add axios`
### Dependencies
The code relies on the following dependencies, which should be installed as project dependencies using npm or yarn:

- React: A JavaScript library for building user interfaces.
- axios: A promise-based HTTP client for making API requests.
Make sure these dependencies are installed in your project before using the code.

### Component Structure
The code defines a React functional component named Login. It consists of various state variables, functions, and conditional rendering logic to handle user registration, login, and logout functionalities.

#### State Variables
The component uses several state variables to manage the component's state and data:

- peopleData: Stores an array of user data fetched from the server.
- pageState: Represents the current page state: 0 for the login page, and 1 for the registration confirmation page.
- user: Stores the user's information (fullName, email, sex, age, country, id) upon successful login.
- error: Stores an error message to be displayed in case of login errors.
- newInfo: Stores the registration details entered by the user during the registration process.
#### useEffect Hook
The component utilizes the useEffect hook to fetch the initial user data from the server when the component mounts and updates the peopleData state.

#### Functions
The component defines several functions to handle user actions:

- Read: A function that makes a GET request to fetch user data from the server and updates the peopleData state.
- clickHandler: A function that toggles the pageState between 0 and 1 when the user clicks a button. It also logs the current peopleData and pageState values to the console.
- registrationFunc: An asynchronous function that handles user registration. It updates the peopleData state with the new registration details, sends a POST request to the server to update the data on the server, and logs the updated peopleData array to the console.
- login: A function that handles user login. It compares the entered login details with the peopleData array and sets the user state with the corresponding user information upon successful login.
- logout: A function that resets the user state to an empty object, effectively logging out the user.
- clearRegister: A function that clears the newInfo state and resets the pageState to 0, allowing the user to register again.
### Rendering Logic
The component uses conditional rendering to display different sections based on the pageState and user state:

- If pageState is 0:
  - If the user is logged in (user.email is not empty), it displays the user's profile information and a logout button.
  - If the user is not logged in, it displays the login form from the Testing component.
- If pageState is 1:
  - If the newInfo.email is empty, it displays the registration form from the Register component.
  - If the newInfo.email is not empty, it displays a confirmation screen with a success message.
### Root Rendering
The component is rendered using ReactDOM.createRoot() and mounted on the root element with the ID "root". Ensure that you have an HTML element with that ID in your HTML file.
### Component Usage
To use this component, make sure you have the required dependencies installed and import them into your project. Then, render the Login component using ReactDOM.createRoot() and mount it on the desired element in your HTML file.
Example:
```javascript
import React from "react";
import ReactDOM from "react-dom";
import Login from "./Login";

ReactDOM.createRoot(document.getElementById("root")).render(<Login />);
```
## React Registerer Component Documentation
This documentation provides an overview of the React Registerer component code and its functionalities.
### Installation
 No additional installation is required as long as you have React set up in your project.
 ### Dependencies
 - React (already included with Create React App)
### Component Structure
The code defines a React functional component named Registerer. It represents a registration form for users to create a new account. It consists of several input fields and validation logic to ensure password matching and password length requirements.

#### State Variables
The component uses several state variables to manage the component's state and form data:

- registrationDetails: Represents the registration details entered by the user, including id, fullName, email, password, sex, age, and country.
- conPassword: Represents the value entered in the "confirm password" field.
  
#### Functions
The component defines several functions to handle user actions:
- submitHandler: A function that is called when the registration form is submitted. It prevents the default form submission behavior, checks if the password meets the length requirement and matches the confirmed password, and then calls the registrationFunc function passed as a prop to handle the registration process.
- handleConPasswordChange: A function that is called when the value in the "confirm password" field changes. It updates the conPassword state with the entered value.
- clicked: A function that is called when the user clicks the "back" button. It calls the clickHandler function passed as a prop to toggle the page state and navigate back to the login screen.
### Rendering Logic
The component renders a registration form with input fields for fullName, email, id, age, sex, password, confirm password, and country. The input values are controlled by the respective state variables.

Validation and error messages are displayed conditionally based on the following criteria:

- The password length must be at least 8 characters. If it is less than 8 characters, a validation error message is displayed.
- The password and confirm password fields must match. If they do not match, an error message is displayed.

The form includes a submit button to initiate the registration process and a back button to navigate back to the login screen.

### Component Usage
To use this component, import it into your project and include it within the appropriate parent component. Pass the necessary props to the component:

- registrationFunc: A function to handle the registration process.
- clickHandler: A function to handle the navigation back to the login screen.
  Example:
  ```javascript
  import React from "react";
  import Registerer from "./Registerer";
  function App() {
  const handleRegistration = (registrationDetails) => {
    // Handle the registration logic
    console.log(registrationDetails);
  };

  const handleBackClick = () => {
    // Handle the navigation back to the login screen
  };

  return (
    <div>
      <Registerer
        registrationFunc={handleRegistration}
        clickHandler={handleBackClick}
      />
    </div>
  );
  }
  export default App;
  ```
## React Testing Component Documentation
This documentation provides an overview of the React Testing component code and its functionalities.

### Installation
 No additional installation is required as long as you have React set up in your project.
### Dependencies
 - React (already included with Create React App)
### Component Structure
The code defines a React functional component named Testing. It represents a login form for users to enter their credentials and initiate the login process. It includes input fields for the user's full name, email, and password.

#### State Variables
The component uses a state variable named details to manage the form data entered by the user. The details object includes properties for fullName, email, and password.

#### Functions
The component defines two functions to handle user actions:

- submitHandler: A function that is called when the login form is submitted. It prevents the default form submission behavior and calls the login function passed as a prop, passing the details state as an argument.
- clicked: A function that is called when the user clicks the "Register" button. It calls the clickHandler function passed as a prop to navigate to the registration screen.
#### Rendering Logic
The component renders a login form with input fields for the user's full name, email, and password. The input values are controlled by the respective state variables.

If an error prop is passed to the component and it is not an empty string, an error message is displayed.

The form includes a "Register" button that triggers the clicked function to navigate to the registration screen.

#### Component Usage
To use this component, import it into your project and include it within the appropriate parent component. Pass the necessary props to the component:

- login: A function to handle the login process.
- error: An error message to be displayed (optional).
- clickHandler: A function to handle the navigation to the registration screen.
Example:
 ```javascript
import React from "react";
import Testing from "./Testing";

function App() {
  const handleLogin = (loginDetails) => {
    // Handle the login logic
    console.log(loginDetails);
  };

  const handleRegisterClick = () => {
    // Handle the navigation to the registration screen
  };

  return (
    <div>
      <Testing login={handleLogin} error="" clickHandler={handleRegisterClick} />
    </div>
  );
}

export default App;
```
## Express Server Documentation
This documentation provides an overview of the Express server code and its functionalities.

### Installation
To use this code, you need to have Node.js and npm (Node Package Manager) installed on your system. Follow these steps to set up and run the server:

1. Install Node.js from the official website: [nodejs.org](https://nodejs.org)
2. Open a terminal or command prompt.
3. Navigate to the directory containing the server code.
4. Run the command `npm install` to install the required dependencies.
5. Run the command `node server.js` to start the server.
### Dependencies
The server code relies on the following dependencies, which are automatically installed via npm:

- Express: A fast and minimalistic web framework for Node.js.
- body-parser: Middleware for parsing incoming request bodies.
- cors: Middleware for enabling Cross-Origin Resource Sharing.
- fs: File system module for reading and writing files.
### Server Initialization
The server is initialized by creating an instance of the Express application and configuring middleware.

```javascript
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');

const app = express();
app.use(bodyParser.json());
app.use(cors());
```
The express module is imported and used to create an instance of the Express application. The body-parser middleware is used to parse incoming JSON data in the request body. The cors middleware is used to handle Cross-Origin Resource Sharing. The fs module is used for file system operations.

### Data File Path
The code assumes that the data is stored in a JSON file named 'UserData.json'. You can modify the dataFilePath variable to specify a different file path if needed.

```javascript
const dataFilePath = 'UserData.json';
```
### Reading Initial Data
The server reads the initial data from the JSON file specified by dataFilePath and stores it in the data variable.

```javascript
let data = JSON.parse(fs.readFileSync(dataFilePath));
The fs.readFileSync() method is used to read the contents of the file synchronously, and JSON.parse() is used to parse the JSON data into a JavaScript object.
```
### Handling POST Requests to Modify Data
The server handles POST requests to the /modify endpoint. It expects the request body to contain a field named newPeopleData that represents the modified data.

```javascript
app.post('/modify', (req, res) => {
  const { newPeopleData } = req.body;

  // Modify the data object
  data.users = newPeopleData;

  // Write the modified data back to the JSON file
  fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));

  res.json({ success: true });
});
```
In the route handler function, the newPeopleData is extracted from the request body. The data object is then modified by assigning the newPeopleData to the users property.

The modified data is written back to the JSON file using fs.writeFileSync(), which overwrites the file with the updated data. The JSON.stringify() function is used to convert the data object back to a JSON string with pretty formatting (using null, 2 as arguments).

Finally, a JSON response is sent back to the client with a success message.

### Server Listening on Port
The server listens on port 5000 for incoming requests.

```javascript
const port = 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
```
The app.listen() method starts the server and listens on the specified port. When the server starts successfully, it logs a message to the console indicating the port number.







