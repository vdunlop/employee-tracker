-- select all from department for drop down
SELECT * FROM department;

-- select all from role for drop down
SELECT * FROM role;

-- select all from employee for drop down
SELECT * FROM employee;

-- show role title and department and emp info for all employee
SELECT employee.id, employee.first_name, employee.last_name, role.title, role.salary, department.department_name
FROM employee
LEFT JOIN role ON role.id=employee.role_id
LEFT JOIN department ON department.id=role.department_id;

-- select role title, department and role info for all roles
SELECT role.id, role.title, role.salary, department.department_name
FROM role
LEFT JOIN department on department.id = role.department_id;

-- add a department
INSERT INTO
department(id, department_name)
VALUES (8, "Groundskeeper");

-- add a role
INSERT INTO
role(id, title, salary, department_id)
VALUES (8, "Data Entry Specialist", 25000, 5);

-- add an employee
INSERT INTO
employee(id, first_name, last_name, role_id, manager_id)
VALUES (8, "April", "Fools", 2, 3);

-- update a role in an employee
UPDATE employee
SET
role_id = 7
WHERE
id = 2;