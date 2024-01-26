-- select all from department for drop down
SELECT * FROM department;

-- select all from role for drop down
SELECT * FROM role;

-- select all from employee for drop down
SELECT * FROM employee;

-- show role title for all employee
SELECT employee.id, employee.first_name, employee.last_name, role.title, department.department_name
FROM employee
LEFT JOIN role ON role.id=employee.role_id
LEFT JOIN department ON department.id=role.department_id;
