const inquirer = require("inquirer");
const { processResponse } = require("./processResponse.js");

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
         processResponse(db, response);
      });
  }
  module.exports = { temp };