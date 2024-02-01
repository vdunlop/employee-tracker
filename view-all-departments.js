function viewAllDepartments(db) {
    const selectAllDepartments = 'SELECT department.id, department.department_name AS "Department" FROM department;';
    db.query(selectAllDepartments, function (err, results) {
        err ? console.error(err) : console.table(results);
    })
    console.log("In viewAllDepartments");
};

module.exports = { viewAllDepartments };