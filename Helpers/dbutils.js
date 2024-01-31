/**
 * Function to get the role drop down values (list of current roles in the db)
 * @param {object} db 
 * @returns {object} array of roles
 */
const getRoleDropDown = (db) => {
  let roleId = 0;

  // Get roles from db and prompt user to choose one.

  // Set roleId.
  return(roleId);
};

/**
 * Function to get the manager drop down values (list of current managers in the db)
 * @param {object} db 
 * @returns {object} array of managers
 */
const getManagerDropDown = (db) => {
  let managerId = 0;

  // Get managers from db and prompt user to choose one.

  // Set managerId.
  return(managerId);
};

/**
 * Function to get the department drop down values (list of current departments in the db)
 * @param {object} db 
 * @returns {object} array of departments
 */
const getDepartmentDropDown = (db) => {
  let departmentId = 0;

  // Get departments from db and prompt user to choose one.

  // Set departmentId.
  return(departmentId);
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
  return(employeeId);
};

module.exports = { getRoleDropDown, getManagerDropDown, getDepartmentDropDown, getEmployeeDropDown };
