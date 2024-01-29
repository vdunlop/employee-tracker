function addEmployee(db) {
    const add = 'SELECT * FROM employee;';
    db.query(selectAllEmployees, function (err, results) {
        err ? console.error(err) : console.log(results);
    })
    console.log("In addEmployee");
};

module.exports = { addEmployee };