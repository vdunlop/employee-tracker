// Inquirer for user input.
const inquirer = require("inquirer");

function addRole(db) {
  let departmentList = [];  // used for the department drop down list in the inquirer prompt

  // get department names for drop down in the inquire.prompt
  const selectAllDepartments = 'SELECT * FROM department;';

  db.query(selectAllDepartments, function (err, results) {
    if (err) {
      console.error(err);
    } else {

// parse out the department names
      for (let i = 0; i < results.length; i++) {
        departmentList[i] = results[i].department_name;
      }

  // Prompt for role name, salary and department
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the name of the role?",
        name: "roleName",
      },
      {
        type: "input",
        message: "What is the salary for this role (format xxxxxx)?",
        name: "salary",
      },
      {
        type: "list",
        message: "Which department does the role belong to?",
        name: "departmentName",
        choices: departmentList,
      },
    ])
    .then((responses) => {

      // get departmentId from the query results that matches
      // the departmentName chosen in the inquirer prompt
      let departmentId = 0;
      for (let i = 0; i < results.length; i++) {
        if (responses.departmentName === results[i].department_name) {
          departmentId = results[i].id;
          break;
        }
      }

      // Build the query
      const addNewRole = `INSERT INTO role(title, salary, department_id) VALUES ("${responses.roleName}", ${responses.salary}, ${departmentId});`;

      db.query(addNewRole, function (err, results) {
        err
          ? console.error(err)
          : console.log(`Added role ${responses.roleName} to the database`);
      });
    });
    }});
  }

module.exports = { addRole };
