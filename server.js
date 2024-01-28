// Include packages:
// Standard library package for reading and writing files.
const fs = require("fs");

// Inquirer for user input.
const inquirer = require("inquirer");

// mysql2 for connection with the database
const mysql = require('mysql2');

// Connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'L@n@B3@r7!',
        database: 'employee_tracker_db'
    },
    console.log(`Connected to the employee_tracker_db database`)
);

// Prompt for main menu questions
function mainMenu() {
inquirer
  .prompt([
    {
      type: "list",
      message: "What would you like to do?",
      choices: [
        "View All Employees",
        "Add Employee",
        "Update Employee Role",
        "View All Roles",
        "Add Role",
        "View All Departments",
        "Add Department",
      ],
      name: "selection",
    }
  ])
  .then((responses) => {
    // Format and write responses to the README file.
    //console.log(responses);
    return(responses.selection);
  });
};

const selection = mainMenu();
console.log(selection);

// Execute the main menu selection
switch(selection) {
    case "View All Employees":
        viewAllEmployees();
        break;
    case "Add Employee":
        addEmployee();
        break;
    case "Update Employee Role":
        updateEmployeeRole();
        break;
    case "View All Roles":
        viewAllRoles();
        break;
    case "Add Role":
        addRole();
        break;
    case "View All Departments":
        viewAllDepartments();
        break;
    case "Add Department":
        addDepartment();
        break;
    default:
        console.error("Invalid selection.");        
};
