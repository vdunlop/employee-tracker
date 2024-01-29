viewAllEmployees = (db) => {
  const selectAllEmployees =
    "SELECT employee.id, employee.first_name, employee.last_name, role.title, department.department_name FROM employee LEFT JOIN role ON role.id=employee.role_id LEFT JOIN department ON department.id=role.department_id;";

  db.query(selectAllEmployees, function (err, results) {
    err ? console.error(err) : console.table(results);
  });
};

module.exports = { viewAllEmployees };
