/**
 * Function to get the role drop down values (list of current roles in the db)
 * @param {object} db 
 * @returns {object} array of roles
 */
const getRoleDropDown = (db) => {
  let roleArr = [];
};

/**
 * Function to get the manager drop down values (list of current managers in the db)
 * @param {object} db 
 * @returns {object} array of managers
 */
const getManagerDropDown = (db) => {
  let managerArr = [];
};

/**
 * Function to get the next employee id
 * @param {object} db 
 * @returns {integer} nextEmployeeId
 */
// Get a new employee id
const getNextEmployeeId = (db) => {
  let nextEmployeeId = 0;
};

module.exports = { getRoleDropDown, getManagerDropDown, getNextEmployeeId };
