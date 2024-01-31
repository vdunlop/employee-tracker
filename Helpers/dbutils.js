/**
 * Function to get the role drop down values (list of current roles in the db)
 * @param {object} db
 * @returns {object} array of roles
 */
const getRoleDropDown = (db) => {
  // Get roles from db and prompt user to choose one.
  const selectAllRoles = "SELECT * FROM role;";
  db.query(selectAllRoles, function (err, results) {
    err
      ? console.error(err)
      : () => {
          return results;
        };
  });

  let roleId = 0;

  // Get roles from db and prompt user to choose one.

  // Set roleId.
  return roleId;
};

/**
 * Function to get the manager drop down values (list of current managers in the db)
 * @param {object} db
 * @returns {object} array of managers
 */
const getManagerDropDown = (db) => {
  let managers = [];

  // Get managers from db and prompt user to choose one.

  // Set managerId.
  return managers;
};

/**
 * Function to get the department drop down values (list of current departments in the db)
 * @param {object} db
 * @returns {object} array of departments
 */
const getDepartmentDropDown = (db) => {
console.log("in get dept dd");
let temp;
  // Get departments from db and prompt user to choose one.
/*  const selectAllDepartments = 'SELECT * FROM department;';
  db.query(selectAllDepartments, function (err, results) {
    err ? console.error(err) : console.log(results);
  });*/
  const selectAllDepartments = 'SELECT * FROM department;';

  db.query(selectAllDepartments, function (err, results) {
    if (err) {
      console.error(err);
    } else {
      temp = results;
console.log(temp);    // how can I get the results passed back????
}

    });
  console.log(temp);
//  return results;
};

/**
 * Function to get the employee drop down values (list of current employees in the db)
 * @param {object} db
 * @returns {integer} employeeId
 */
const getEmployeeDropDown = (db) => {
  let employeeId = 0;

  // Get employees from db and prompt user to choose one.

  // Set employeeId
  return employeeId;
};

module.exports = {
  getRoleDropDown,
  getManagerDropDown,
  getDepartmentDropDown,
  getEmployeeDropDown,
};
