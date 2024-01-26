DROP DATABASE IF EXISTS employee_tracker_db;
CREATE DATABASE employee_tracker_db;

USE employee_tracker_db;

CREATE TABLE departments (
    id INT NOT NULL PRIMARY_KEY,
    name VARCHAR(30) NOT NULL
);

CREATE TABLE roles (
    id INT NOT NULL PRIMARY_KEY,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL,
    FOREIGN_KEY (department_id)
    REFERENCES departments(id)
    ON DELETE SET NULL 
);

CREATE TABLE employees (
    id INT NOT NULL PRIMARY_KEY,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    FOREIGN_KEY role_id
    REFERENCES employees(id)
    ON DELETE SET NULL
);