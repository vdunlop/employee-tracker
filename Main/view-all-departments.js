const { temp } = require("./mainmenu.js");

function viewAllDepartments(db) {
  const selectAllDepartments =
    'SELECT department.id, department.department_name AS "Department" FROM department;';
  db.promise().query(selectAllDepartments
  )
  .then(([rows]) => console.table(rows))
  .then(() => temp());
}

module.exports = { viewAllDepartments };
