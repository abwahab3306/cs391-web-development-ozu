# cs391-web-development-ozu

Our Project idea is about making a course registration system for students. The website will consist of 3 webpages. The login page. The course registration page and a third page where the students can view the courses they have taken.

Website will aldo contain two pages for teacher.
- login 
- courses 
Teachers can add courses 


The other necessary constraints like max name length and email syntax, etc will also be implemented.

## Important: please use Live Server to run this project.

### Find Logins credentials below:

#### Teachers:

"email":"ashwin30@ozu.edu.tr",
"password": "123456"

#### Students:

"email":"ashwin30@ozu.edu.tr",
"password": "123456"

## To Add new users just go to db folder and you may add as many users using the same format. 


# CS391 React Project

This application is a course registration and course enrollment website. It uses WebStorage API to storing datas.


Used bootstrap CDN + react router as external libraries.

Create project with bootstrap cdn, react router and create-react-app and add repo to github. Initiliazed pages and made the transformation of html css and vanilla javascript code into React code. Added login option as student or teacher. Created all React Components as subcomponents in each file. Enrolling Courses as students, displaying courses, registering a course as teacher added. Used local and session storage to storing datas.

used Express js to create the server and nedb a light weight nosql db to store data. for this project we need to run the server to make it work properly, please see instruction below to know how to start the project. API is running on 8001 port. 


# How to start ?

clone the project and 'npm install' inside the project directory.

You cant start the project with 
### 'npm run dev' command


# Features

1- you can find logins as below: 

### teacher:
#### teacher@lms.com
#### teacher
### Students:
#### student@lms.com
#### student


3- According to his user type ( teacher or student), user can enter the enrolling course page as student or register course page as teacher.

4- User can log out if logged from the right top of the menu.

5- Teacher can register a course from Register Course Page.

6- Teacher can display all courses in a table format in register course page.

7- Student can enroll a course from all courses in Enroll Course Page.

8- Student can display all courses. If current signed user is already enrolled that course there will pop up an alert.

