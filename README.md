# employee-tracker

## Description
The employee tracker is a content management system (CMS). It is a command-line application that can be used to manage a company's employee database.

### User-Story
AS A business owner

I WANT to be able to view and manage the departments, roles, and employees in my company

SO THAT I can organize and plan my business

### Acceptance-Criteria
GIVEN a command-line application that accepts user input

WHEN I start the application

THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role

WHEN I choose to view all departments

THEN I am presented with a formatted table showing department names and department ids

WHEN I choose to view all roles

THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role

WHEN I choose to view all employees

THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to

WHEN I choose to add a department

THEN I am prompted to enter the name of the department and that department is added to the database

WHEN I choose to add a role

THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database

WHEN I choose to add an employee

THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database

WHEN I choose to update an employee role

THEN I am prompted to select an employee to update and their new role and this information is updated in the database

### Mock-Up

Note Taker get started page
![note taker start page]()

Note Taker new note example
![note taker main page](./Assets/12-sql-homework-demo-01.png)

Note Taker save note example
![note taker save page](./Assets/12-sql-homework-video-thumbnail.png)


## Installation-Execution

Open a command terminal, go to the note-taker folder and execute server.js using the command "node server.js". This will start your server.

Open a browser and type localhost:3001.

The browser will open the main screen for Note Taker. Click on <Get Started>.

Once you are in the notes list screen, you can do the following:

1. Type in a Note Title and Note Text and click <Save Note> to create a note.

2. Type in a Note Title and Note Text and click on <Clear> to clear out what you've typed.

3. Click on an existing note to have it show on the right side screen with details. You will also see the <New Note> button appear.

4. Click on the "delete" symbol next to any note and it will be deleted and the left side list will be updated.

## Usage

The Note Taker app can be used to keep track of your to do list. You can add your to-do item (like washing the car) along with a title. You can also delete items off of your list as you complete them. Your items with their titles will be saved in a local file on your computer, so that if you exit out of the app and then go back in, your list will still be accurate.

## Testing
N/A

## Credits
N/A
inquirer with async/await
https://gist.github.com/midnightcodr/bd8f9cd4414f5571774c141d1e0865d8

## License
N/A