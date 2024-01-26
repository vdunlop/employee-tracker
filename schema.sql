DROP DATABASE IF EXISTS employee_tracker_db;
CREATE DATABASE employee_tracker_db;

USE employee_tracker_db;

CREATE TABLE department (
    id INT NOT NULL PRIMARY_KEY,
    department_name VARCHAR(30) NOT NULL
);

CREATE TABLE role (
    id INT NOT NULL PRIMARY_KEY,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL,
    FOREIGN_KEY (department_id)
    REFERENCES department(id)
    ON DELETE SET NULL 
);

CREATE TABLE employee (
    id INT NOT NULL PRIMARY_KEY,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    FOREIGN_KEY role_id
    REFERENCES role(id)
    ON DELETE SET NULL,
    FOREIGN_KEY manager_id
    REFERENCES employee(id)
    ON DELETE SET NULL
);