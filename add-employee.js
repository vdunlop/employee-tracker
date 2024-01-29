// Helper functions for providing db data to build SQL
const {
    getRoleDropDown,
    getManagerDropDown,
    getNextEmployeeId
  } = require("./Helpers/dbutils");

function addEmployee(db) {
    // Get more input from the user for first name, last name, role and manager
    // Get the role drop down values
    const roleArr = getRoleDropDown(db);

    // Get the manager drop down values
    const managerArr = getManagerDropDown(db);

    // Get a new employee id
    const newEmpId = getNextEmployeeId(db);

    // Prompt for first name, last name, role, and manager

    // Build the query
    const addNewEmployee = 'INSERT INTO employee(id, first_name, last_name, role_id, manager_id) VALUES (8, "April", "Fools", 2, 3);';

    db.query(addNewEmployee, function (err, results) {
        err ? console.error(err) : console.log(results);
    })
    console.log("In addEmployee");
};

module.exports = { addEmployee };