function viewAllDepartments(db) {
    const selectAllEmployees = 'SELECT * FROM department;';
    db.query(selectAllEmployees, function (err, results) {
        err ? console.error(err) : console.table(results);
    })
    console.log("In viewAllDepartments");
};

module.exports = { viewAllDepartments };