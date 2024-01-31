function viewAllDepartments(db) {
    const selectAllDepartments = 'SELECT * FROM department;';
    db.query(selectAllDepartments, function (err, results) {
        err ? console.error(err) : console.table(results);
    })
    console.log("In viewAllDepartments");
};

module.exports = { viewAllDepartments };