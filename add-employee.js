// Helper functions for providing db data to build SQL
const {
    getRoleDropDown,
    getManagerDropDown,
  } = require("./Helpers/dbutils");

function addEmployee(db) {
    let firstName = "";
    let lastName = "";

    // Get more input from the user for first name, last name, role and manager
    // Prompt for first name and last name
    firstName = "Vicki";
    lastName = "Dunlop";

    // Get the role drop down values
    //const roleId = getRoleDropDown(db);
    const roleId = 1;

    // Get the manager drop down values
    //const managerId = getManagerDropDown(db);
    const managerId = 2;

     // Build the query
    const addNewEmployee = `INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUES ("${firstName}", "${lastName}", ${roleId}, ${managerId});`;
console.log(addNewEmployee);
    db.query(addNewEmployee, function (err, results) {
        err ? console.error(err) : console.table(results);
    })
    console.log("In addEmployee");
    console.log(`Added ${firstName} ${lastName} to the database`);
};

module.exports = { addEmployee };