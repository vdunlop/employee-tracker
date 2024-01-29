// Import selection functions
const { viewAllEmployees } = require("./view-all-employees.js");
const { viewAllDepartments } = require("./view-all-departments.js");
const { viewAllRoles } = require("./view-all-roles.js");
const { updateEmployeeRole } = require("./update-employee-role.js");
const { addDepartment } = require("./add-department.js");
const { addEmployee } = require("./add-employee.js");
const { addRole } = require("./add-role.js");

// Include packages:
// Standard library package for reading and writing files.
const fs = require("fs");

// Inquirer for user input.
const inquirer = require("inquirer");

// express for middleware
//const express = require('express');
// mysql2 for connection with the database
const mysql = require("mysql2");
//const PORT = process.env.PORT || 3001;
//const app = express();

//appendFile.use(express.urlencoded({ extended: false}));
//appendFile.use(express.json());

// Connect to database
const db = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: "L@n@B3@r7!",
    database: "employee_tracker_db",
  },
  console.log(`Connected to the employee_tracker_db database`)
);

db.connect(function (err) {
  if (err) throw err;
});

// Prompt for main menu questions
/*async function mainMenu() {
  await inquirer
    .prompt({
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
    })
    .then((response) => {
      //console.log("in response")
      //console.log(response);
      //console.log(response.selection);
      return response.selection;
    })
    .catch((error) => {
      if (err) {
        console.error(err);
      }
    });
}*/

function init() {
  //let selection = mainMenu();
  const selection = "View All Employees";
  console.log("after main menu");
  console.log(selection);
  // Execute the main menu selection
  switch (selection) {
    case "View All Employees":
      console.log("in switch view all employees");
      viewAllEmployees(db);
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
    case "Quit":
        return;
    default:
      console.error("Invalid selection.");
  }
  return;
}

init();

//app.listen(PORT, () => {
//    console.log(`Server running on port ${PORT}`);
//});
