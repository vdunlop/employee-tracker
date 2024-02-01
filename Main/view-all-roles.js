function viewAllRoles(db) {
    const selectAllEmployees = 'SELECT role.id, role.title AS "Title", role.salary AS "Salary", department.department_name AS "Department" FROM role LEFT JOIN department on department.id = role.department_id;';

    db.query(selectAllEmployees, function (err, results) {
        err ? console.error(err) : console.table(results);
    })
};

module.exports = { viewAllRoles };