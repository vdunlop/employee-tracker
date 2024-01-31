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
 * Function to get the next employee id
 * @param {object} db 
 * @returns {integer} nextEmployeeId
 */
// Get a new employee id
const getNextEmployeeId = (db) => {
  let nextEmployeeId = 0;

  // Get the number of records in the employee table.
  
  // Set nextEmployeeId to number of records in the employee table plus 1.
  return(nextEmployeeId);
};

module.exports = { getRoleDropDown, getManagerDropDown, getNextEmployeeId };
