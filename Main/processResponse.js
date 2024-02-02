// Import processing selection functions
const { viewAllEmployees } = require("./view-all-employees.js");
const { viewAllDepartments } = require("./view-all-departments.js");
const { viewAllRoles } = require("./view-all-roles.js");
const { updateEmployeeRole } = require("./update-employee-role.js");
const { addDepartment } = require("./add-department.js");
const { addEmployee } = require("./add-employee.js");
const { addRole } = require("./add-role.js");

// Function processResponse: process the selection that came from the inquirer prompt.
// Process the selection from the main menu
function processResponse(db, response) {
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
    return;
  }
  
module.exports = { processResponse };