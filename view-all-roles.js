function viewAllRoles(db) {
    const selectAllEmployees = 'SELECT * FROM employee;';
    db.query(selectAllEmployees, function (err, results) {
        err ? console.error(err) : console.log(results);
    })
    console.log("In viewAllRoles");
};

module.exports = { viewAllRoles };