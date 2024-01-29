viewAllEmployees = (db) => {
   const selectAllEmployees = 'SELECT * FROM employee;';
    db.query(selectAllEmployees, function (err, results) {
        err ? console.error(err) : console.table(results);
    });
    console.log("In viewAllEmployees");
};

module.exports = { viewAllEmployees };