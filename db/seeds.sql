INSERT INTO department (id, department_name)
VALUES 
(1, "Marketing"),
(2, "Sales"),
(3, "Customer Service"),
(4, "Human Resources"),
(5, "IT"),
(6, "Energy Assistance"),
(7, "Outreach");

INSERT INTO role (id, title, salary, department_id)
VALUES 
(1, "Director", 70000, NULL),
(2, "Assistant Director", 60000, NULL),
(3, "Manager", 50000, NULL),
(4, "Coordinator", 45000, NULL),
(5, "Specialist", 40000, NULL),
(6, "Administrators", 30000, NULL),
(7, "Worker Bees", 20000, NULL);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES
(1, "Little Red", "Riding Hood", 5, NULL),
(2, "Big Bad", "Wolf", 3, NULL),
(3, "Mama", "Bear", 1, NULL), 
(4, "Papa", "Bear", 5, NULL),
(5, "Baby", "Bear", 7, NULL),
(6, "Goldi", "Locks", 6, NULL);
