// Inquirer for user input.
const inquirer = require("inquirer");

function updateEmployeeRole(db) {

    // Get the role drop down values
    //const roleId = getRoleDropDown(db);
    const roleId = 1;

    // Get the employee drop down values
    // const employeeId = getEmployeesDropDown(db);
    const employeeId = 1;

    // Build the query
    const updateRole = `UPDATE employee SET role_id = ${roleId} WHERE id = ${employeeId};`;
console.log(updateRole);

    db.query(updateRole, function (err, results) {
        err ? console.error(err) : console.table(results);
    })
    console.log("In updateEmployeeRole");
    console.log("Updated employee's role");
};

module.exports = { updateEmployeeRole };