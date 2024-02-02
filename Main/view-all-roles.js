// Function: viewAllRoles
// displays all roles in table
//
// parameter: db - current database running

function viewAllRoles(db) {
  const selectAllRoles =
    'SELECT role.id, role.title AS "Title", role.salary AS "Salary", department.department_name AS "Department" FROM role LEFT JOIN department on department.id = role.department_id;';
db.query(selectAllRoles, function (err, responses) {
  err ? console.error(err) : console.table(responses);
})
}

module.exports = { viewAllRoles };
