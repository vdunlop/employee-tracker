// Inquirer for user input.
const inquirer = require("inquirer");

// Function: addDepartment
// prompts for department name
// inserts into sql
//
// parameter: db - current database running
function addDepartment(db) {
  // Prompt for department name
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
        err ? console.error(err) : console.log(`Added Department ${response.deptName} to the database`);
      });
     })
     
     ;
    }
        
   
module.exports = { addDepartment };
