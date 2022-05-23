# final-frontend
Members: David Cai
Assignment

Technical breakdown of requirements:

All instructors and All courses 

Database (Sequelize) 
- [x] Write a `instructors` model with the following information:   
 
- [x] firstname  
- [x] lastname 
- [x] department 
- [x] imageUrl

 - [x] Write a `courses` model with the following information:  
- [x] title 
- [x] timeslot
- [x] location

 - [x] courses may be associated with at most one instructor
- [x] instructors may be associated with many courses  

API (Express, Sequelize)
 - [x] Write a route to serve up all courses 
- [x] Write a route to serve up all instructors  

State management (Redux)
 - [X] Write a instructors sub-reducer to manage instructors in your Redux store 
- [x] Write a courses sub-reducer to manage courses in your Redux store

UI (React)
 - [x] Write a component to display a list of all instructors (names and department) 
- [x] Write a component to display a list of all courses (just the title)

Client-side routing (React-Router)
 - [x] Display the all-instructors component when the url matches `/instructors`
 - [x] Display the all-courses component when the url matches `/courses` 
- [x] Add links to the navbar that can be used to navigate to the all-instructors view and the all-courses view

Single course and Single instructor 

API (Express, Sequelize)
 - [x] Write a route to serve up a single instructor (based on their id), including that instructor’s courses
 - [x] Write a route to serve up a single course (based on its id), including that course's instructor

UI (React)
 - [X ] Write a component to display a single instructor with the following information:  
- [ X] The instructor's name, image, and department
- [X ] A list of all courses that instructor is assigned 
- [X ] Write a component to display a single course with the following information:   
- [X ] The course title, timeslot, and location
- [X ] The name of the instructor 


Client-side routing (React-Router)
- [x] Display the appropriate instructor's info when the url matches `/instructors/:instructorId`
 - [x] Clicking on a instructor from the all-instructors view should navigate to show that instructor in the single-instructor view
 - [x] Display the appropriate course when the url matches `/courses/:courseId`
 - [x] Clicking on a course from the all-courses view should navigate to show that course in the single-course view  
- [x ] Clicking on the name of a course in the single-instructor view should navigate to show that course in the single-course view
 - [X] Clicking on the name of a instructor in the single-course view should navigate to show that instructor in the single-instructor view    

Editing a instructor and Editing a course 

API (Express, Sequelize)
 - [] Write a route to edit a new instructor 
- [] Write a route to edit a new course  

UI (React) 
- [ ] Write a component to display a form for editing an instructor’s information
- [ ] Display this component EITHER as part of the single-instructor view, or as its own view
 - [ ] Submitting the form with should:   
- [ ] Make a request that causes the instructor to be updated in the database   
- [ ] Display the updates without needing to refresh the page  

- [ ] Write a component to display a form for editing a course
- [ ] Display this component EITHER as part of the single-course view, or as its own view
 - [ ] Submitting the form with a should:   
- [ ] Make a request that causes the course to be updated in the database   
- [ ] Display the updates without needing to refresh the page  

Adding course and Adding instructor

API (Express, Sequelize)
 - [x] Write a route to add a new instructor 
- [x] Write a route to add a new course  

UI (React) 
- [ ] Write a component to display a form for adding a new instructor that contains inputs for at the firstname, lastname, department, and imageUrl. 
- [ ] Display this component EITHER as part of the all-instructors view, or as its own view
 - [ ] Submitting the form with the required fields should:   
- [ ] Make a request that causes the new instructor to be persisted in the database   
- [ ] Add the new instructor to the list of instructors without needing to refresh the page  

- [x ] Write a component to display a form for adding a new course that contains inputs for the course title, timeslot, location
- [ x] Display this component EITHER as part of the all-courses view, or as its own view
 - [ x] Submitting the form with the required fields:   
- [x ] Make a request that causes the new course to be persisted in the database   
- [ x] Add the new course to the list of courses without needing to refresh the page  

Removing a instructor and Removing a course

API (Express, Sequelize) 
- [x] Write a route to remove a instructor (based on its id) 
- [x] Write a route to remove a course (based on their id)  

UI (React)
 - [X ] In the all-instructors view, include an `X` button next to each instructor 
- [ ] Clicking the `X` button should:   
- [ ] Make a request that causes that instructor to be removed from database   
- [ ] Remove the instructor from the list of instructors without needing to refresh the page  
- [x] In the all-courses view, include an `X` button next to each course
- [x] Clicking the `X` button should:   
- [x] Make a request that causes that course to be removed from database   
- [x] Remove the course from the list of courses without needing to refresh the page

