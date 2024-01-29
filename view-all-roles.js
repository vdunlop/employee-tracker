function viewAllRoles(db) {
    const selectAllEmployees = 'SELECT role.id, role.title, role.salary, department.department_name FROM role LEFT JOIN department on department.id = role.department_id;';

    db.query(selectAllEmployees, function (err, results) {
        err ? console.error(err) : console.table(results);
    })
    console.log("In viewAllRoles");
};

module.exports = { viewAllRoles };