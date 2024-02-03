// Import processing selection functions
const { viewAllEmployees } = require("./view-all-employees.js");
const { viewAllDepartments } = require("./view-all-departments.js");
const { viewAllRoles } = require("./view-all-roles.js");

const inquirer = require("inquirer");

// Function: temp
// prompts for next action from the main menu list
// calls the function to carry out the action that was chosen
//
// parameter: db - current database running
function temp(db) {
  // Display main menu
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

    // Process main menu selection
    .then((response) => {
      // get the selection out of the inquirer response to process
      const selection = response.selection;
      // Execute the main menu selection
      switch (selection) {
        case "View All Employees":
          // displays table of all employees
          viewAllEmployees(db);
          setTimeout(() => {
            temp(db);
          }, 1000);
          break;

        case "Add Employee":
          // prompts for employee first name, last name, role, manager
          // inserts into sql
          let empRoleList = []; // used for the roles drop down list in the inquirer prompt
          let managerList = []; // used for the managers drop down list in the inquirer prompt

          // Get the role drop down values
          const selectAllEmpRoles = "SELECT * FROM role;";

          db.query(selectAllEmpRoles, function (err, roleResults) {
            if (err) {
              console.error(err);
            } else {
              // parse out the role names
              for (let i = 0; i < roleResults.length; i++) {
                empRoleList[i] = roleResults[i].title;
              }

              // Get the manager drop down values
              const managerId = 2;
              const selectAllManagers = "SELECT * FROM employee;";

              db.query(selectAllManagers, function (err, managerResults) {
                if (err) {
                  console.error(err);
                } else {
                  // parse out the manager names
                  for (let i = 0; i < managerResults.length; i++) {
                    managerList[i] =
                      managerResults[i].first_name +
                      " " +
                      managerResults[i].last_name;
                  }

                  // Prompt for the first and last name, role and manager
                  inquirer
                    .prompt([
                      {
                        type: "input",
                        message: "What is the employee's first name?",
                        name: "firstName",
                      },
                      {
                        type: "input",
                        message: "What is the employee's last name?",
                        name: "lastName",
                      },
                      {
                        type: "list",
                        message: "What is the employee's role?",
                        name: "roleName",
                        choices: empRoleList,
                      },
                      {
                        type: "list",
                        message: "Who is the employee's manager?",
                        name: "managerName",
                        choices: managerList,
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

                      // get managerId from the query results that matches
                      // the managerName chosen in the inquirer prompt
                      let managerId = 0;
                      for (let i = 0; i < managerResults.length; i++) {
                        if (
                          responses.managerName ===
                          managerResults[i].first_name +
                            " " +
                            managerResults[i].last_name
                        ) {
                          managerId = managerResults[i].id;
                          break;
                        }
                      }

                      // Build the query
                      const addNewEmployee = `INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUES ("${responses.firstName}", "${responses.lastName}", ${roleId}, ${managerId});`;
                      db.query(addNewEmployee, function (err, finalResults) {
                        err
                          ? console.error(err)
                          : console.log(
                              `Added ${responses.firstName} ${responses.lastName} to the database`
                            );
                      });
                    }) // .then inquirer prompt
                    .then(() => {
                      setTimeout(() => {
                        temp(db);
                      }, 1000);
                    }) // .then
                    .catch((error) => {
                      console.error(error);
                    }); // .catch
                } // else for manager
              }); // db.query 2
            } // else for role
          }); // db.query 1
          break;

        case "Update Employee Role":
          // prompts for employee to update and new role
          // inserts into sql

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
                      db.query(
                        updateEmployeeRole,
                        function (err, finalResults) {
                          err
                            ? console.error(err)
                            : console.log(
                                `Updated ${responses.employeeName}'s role in the database`
                              );
                        }
                      );
                    }) // .then inquirer prompt
                    .then(() => {
                      setTimeout(() => {
                        temp(db);
                      }, 1000);
                    }) // .then 2
                    .catch((error) => {
                      console.error(error);
                    }); // .catch
                }
              }); // db query
            }
          });  db.query
          break;

        case "View All Roles":
          // displays table of all roles
          viewAllRoles(db);
          setTimeout(() => {
            temp(db);
          }, 1000);
          break;

        case "Add Role":
          // prompts for role name, department and salary that correlate with the role
          // inserts into sql
          let departmentList = []; // used for the department drop down list in the inquirer prompt

          // get department names for drop down in the inquire.prompt
          const selectAllDepartments = "SELECT * FROM department;";

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
                    message:
                      "What is the salary for this role (format xxxxxx)?",
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
                    if (
                      responses.departmentName === results[i].department_name
                    ) {
                      departmentId = results[i].id;
                      break;
                    }
                  }

                  // Build the query
                  const addNewRole = `INSERT INTO role(title, salary, department_id) VALUES ("${responses.roleName}", ${responses.salary}, ${departmentId});`;

                  db.query(addNewRole, function (err, results) {
                    err
                      ? console.error(err)
                      : console.log(
                          `Added role ${responses.roleName} to the database`
                        );
                  });
                }) // .then 1
                .then(() => {
                  setTimeout(() => {
                    temp(db);
                  }, 1000);
                }) // .then 2
                .catch((error) => {
                  console.error(error);
                }); // .catch
            } // db.query 1 else
          }); // db.query 1

          break;

        case "View All Departments":
          // displays table of all departments
          viewAllDepartments(db);
          setTimeout(() => {
            temp(db);
          }, 1000);
          break;

        case "Add Department":
          // prompts for department name
          // inserts into sql
          inquirer
            .prompt([
              {
                type: "input",
                message: "What is the name of the department?",
                name: "deptName",
              },
            ])
            .then((response) => {
              // Build the query
              const addNewDept = `INSERT INTO department(department_name) VALUES ("${response.deptName}");`;

              db.query(addNewDept, function (err, results) {
                err
                  ? console.error(err)
                  : console.log(
                      `Added Department ${response.deptName} to the database`
                    );
              });
            })
            .then(() => {
              setTimeout(() => {
                temp(db);
              }, 1000);
            })
            .catch((error) => {
              console.error(error);
            });

          break;
        default:
          console.error("Invalid selection.");
      }
      return;
    });
  /*   .finally(() => {
      // recurse back to this function to display the main menu and process
      setTimeout(() => {
        temp(db);
      }, 1000);
    });*/
}

module.exports = { temp };
