// Import processing selection functions
const { viewAllEmployees } = require("./Main/view-all-employees.js");
const { viewAllDepartments } = require("./Main/view-all-departments.js");
const { viewAllRoles } = require("./Main/view-all-roles.js");
const { updateEmployeeRole } = require("./Main/update-employee-role.js");
const { addDepartment } = require("./Main/add-department.js");
const { addEmployee } = require("./Main/add-employee.js");
const { addRole } = require("./Main/add-role.js");

// Include packages:
// Standard library package for reading and writing files.
const fs = require("fs");

// Inquirer for user input.
const inquirer = require("inquirer");

// Ascii-art for displaying the initial heading.
const art = require("ascii-art");

// mysql2 for connection with the database
const mysql = require("mysql2");

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
// Function displayMainMenu: prompt with the main menu questions of what a user would like to do.
// Prompt for main menu questions
function displayMainMenu(db) {
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
      },
    ])
    .then((response) => {
      //       processResponse(db, response);
      // get the selection out of the inquirer response to process
      const selection = response.selection;

      // Execute the main menu selection
      switch (selection) {
        case "View All Employees":
          viewAllEmployees(db);
          break;
        case "Add Employee":
          addEmployee(db);
          break;
        case "Update Employee Role":
          updateEmployeeRole(db);
          break;
        case "View All Roles":
          viewAllRoles(db);
          break;
        case "Add Role":
          addRole(db);
          break;
        case "View All Departments":
          viewAllDepartments(db);
          break;
        case "Add Department":
          addDepartment(db);
          break;
        default:
          console.error("Invalid selection.");
      }
    });
}
// Function header: displays the main header for the app
function displayHeader() {
  // Display initial header
  art.font(`Employee`, "Doom", (err, rendered) => {
    console.log(rendered);
  });

  setTimeout(() => {
    art.font(`Tracker`, "Doom", (err, rendered) => {
      console.log(rendered);
    });
  });
}

// Init function: initialize the screen with a header type message.
// Control the looping of the main menu to continue the employee-tracker or
// exit when quit is entered.
async function init() {
  // Display the application's greeting
  displayHeader();

  // Display main menu and start processing
  setTimeout(() => {
    displayMainMenu(db);
  }, 500);

}
  
//for (let i=0; i<10; i++){
  init();
//}
