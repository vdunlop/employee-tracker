// Function: viewAllDepartments
// displays all departments in table
//
// parameter: db - current database running
function viewAllDepartments(db) {
  const selectAllDepartments =
    'SELECT department.id, department.department_name AS "Department" FROM department;';
  db.query(selectAllDepartments, function (err, responses) {
    err ? console.error(err) : console.table(responses);
  })
  }

module.exports = { viewAllDepartments };
