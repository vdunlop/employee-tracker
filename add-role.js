function addRole(db) {
    let roleName = "";
    
    // Prompt for role name
    roleName = "Groundskeeper";

    // Prompt for salary
    salary = 22000;

    // Prompt for department name (need id)
    //const departmentId = getDepartmentDropDown(db);
    const departmentId = 9;
    
    // Build the query
    const addNewRole = `INSERT INTO role(title, salary, department_id) VALUES ("${roleName}", ${salary}, ${departmentId});`;
    console.log(addNewRole);
    
    db.query(addNewRole, function (err, results) {
        err ? console.error(err) : console.table(results);
    })
    console.log("In addRole");
    console.log(`Added Role ${roleName} to the database`);
};

module.exports = { addRole };