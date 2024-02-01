function viewAllEmployees (db) {
   const selectAllEmployees = 'SELECT e1.id, e1.first_name AS "Employee First", e1.last_name AS "Employee Last", role.title AS "Title", role.salary AS "Salary", department.department_name AS "Department Name", e2.first_name AS "Manager First", e2.last_name AS "Manager Last" FROM employee e1 LEFT JOIN role ON role.id=e1.role_id LEFT JOIN department ON department.id=role.department_id LEFT JOIN employee e2 ON e2.id=e1.manager_id;';
    db.query(selectAllEmployees, function (err, results) {
        err ? console.error(err) : console.table(results);
    });
};

module.exports = { viewAllEmployees };