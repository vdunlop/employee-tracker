function addDepartment(db) {
  let deptName = "";

  // Prompt for department name
  deptName = "Maintenance";

  // Build the query
  const addNewDept = `INSERT INTO department(department_name) VALUES ("${deptName}");`;
  console.log(addNewDept);
  
  db.query(addNewDept, function (err, results) {
    err ? console.error(err) : console.table(results);
  });
  console.log("In addDepartment");
  console.log(`Added Department ${deptName} to the database`);
};

module.exports = { addDepartment };
