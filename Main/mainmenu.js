// Import processing selection functions
const { viewAllEmployees } = require("./view-all-employees.js");
const { viewAllDepartments } = require("./view-all-departments.js");
const { viewAllRoles } = require("./view-all-roles.js");
const { updateEmployeeRole } = require("./update-employee-role.js");
const { addDepartment } = require("./add-department.js");
const { addEmployee } = require("./add-employee.js");
const { addRole } = require("./add-role.js");

const inquirer = require("inquirer");

  // Function displayMainMenu: prompt with the main menu questions of what a user would like to do.
  // Prompt for main menu questions
  function temp(db) {
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
      }) .then((response) => { temp(db);
      })
  }

  module.exports = { temp };