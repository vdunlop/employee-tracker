// Inquirer for user input.
const inquirer = require("inquirer");

function addEmployee(db) {
  let roleList = []; // used for the roles drop down list in the inquirer prompt
  let managerList = []; // used for the managers drop down list in the inquirer prompt

  // Get the role drop down values
  //const roleId = getRoleDropDown(db);
  const roleId = 1;
  const selectAllRoles = "SELECT * FROM role;";

  db.query(selectAllRoles, function (err, roleResults) {
    if (err) {
      console.error(err);
    } else {
      // parse out the role names
      for (let i = 0; i < roleResults.length; i++) {
        roleList[i] = roleResults[i].title;
      }
      console.log(roleList);

      // Get the manager drop down values
      //const managerId = getManagerDropDown(db);
      const managerId = 2;
      const selectAllManagers = "SELECT * FROM employee;";

      db.query(selectAllManagers, function (err, managerResults) {
        if (err) {
          console.error(err);
        } else {
          // parse out the manager names
          for (let i = 0; i < managerResults.length; i++) {
            managerList[i] = managerResults[i].first_name + " " + managerResults[i].last_name;
          }
          console.log(managerList);

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
                choices: roleList,
              },
              {
                type: "list",
                message: "Who is the employee's manager?",
                name: "managerName",
                choices: managerList,
              },
            ])
            .then((responses) => {
                console.log(responses);
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
                  (managerResults[i].first_name + " " + managerResults[i].last_name)){
                  managerId = managerResults[i].id;
                  break;
                }
              }

              // Build the query
              const addNewEmployee = `INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUES ("${responses.firstName}", "${responses.lastName}", ${roleId}, ${managerId});`;
              console.log(addNewEmployee);
              db.query(addNewEmployee, function (err, finalResults) {
                err ? console.error(err) : console.table(finalResults);
              });
              console.log("In addEmployee");
              console.log(`Added ${responses.firstName} ${responses.lastName} to the database`);
            }); // .then inquirer prompt
        }
      }); // else for manager
    }
  }); // else for role
}  // function end

module.exports = { addEmployee };
