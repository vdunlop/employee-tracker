// Inquirer for user input.
const inquirer = require("inquirer");

// Function: updateEmployeeRole
// prompts for employee to update and new role
// inserts into sql
//
// parameter: db - current database running
function updateEmployeeRole(db) {
  let roleList = []; // used for the roles drop down list in the inquirer prompt
  let employeeList = []; // used for the employees drop down list in the inquirer prompt

  // Get the role drop down values
  const selectAllRoles = "SELECT * FROM role;";

  db.query(selectAllRoles, function (err, roleResults) {
    if (err) {
      console.error(err);
    } else {
      // parse out the role names
      for (let i = 0; i < roleResults.length; i++) {
        roleList[i] = roleResults[i].title;
      }

      // Get the employee drop down values
      //const employeeId = getemployeeDropDown(db);
      const employeeId = 2;
      const selectAllemployees = "SELECT * FROM employee;";

      db.query(selectAllemployees, function (err, employeeResults) {
        if (err) {
          console.error(err);
        } else {
          // parse out the employee names
          for (let i = 0; i < employeeResults.length; i++) {
            employeeList[i] =
              employeeResults[i].first_name +
              " " +
              employeeResults[i].last_name;
          }

          // Prompt for the employee and role
          inquirer
            .prompt([
              {
                type: "list",
                message:
                  "Which role do you want to assign the selected employee?",
                name: "roleName",
                choices: roleList,
              },
              {
                type: "list",
                message: "Which employee's role do you want to update?",
                name: "employeeName",
                choices: employeeList,
              },
            ])
            .then((responses) => {
              // get roleId from the query results that matches
              // the roleName chosen in the inquirer prompt
              let roleId = 0;
              for (let i = 0; i < roleResults.length; i++) {
                if (responses.roleName === roleResults[i].title) {
                  roleId = roleResults[i].id;
                  break;
                }
              }

              // get employeeId from the query results that matches
              // the employeeName chosen in the inquirer prompt
              let employeeId = 0;
              for (let i = 0; i < employeeResults.length; i++) {
                if (
                  responses.employeeName ===
                  employeeResults[i].first_name +
                    " " +
                    employeeResults[i].last_name
                ) {
                  employeeId = employeeResults[i].id;
                  break;
                }
              }

              // Build the query
              const updateEmployeeRole = `UPDATE employee SET role_id = ${roleId} WHERE id = ${employeeId};`;
              db.query(updateEmployeeRole, function (err, finalResults) {
                err ? console.error(err) : console.log(`Updated ${responses.employeeName}'s role in the database`);
              });
              
            }); // .then inquirer prompt
        }
      }); // else for employee
    }
  }); // else for role
} // function end

module.exports = { updateEmployeeRole };
