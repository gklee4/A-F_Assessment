# A-F_Assessment

# APP INSTRUCTIONS

# Exercise 1:
1. Clone this repo into your local. This clones both the exercises folders into your local.
2. To run the Exercise 1, In terminal, from home execute cd exercise-2/In terminal, go to folder exercise-1/
3. Execute the command npm install and this installs all the necessary node modules required for the project. These modules are picked from the package.json file
4. Now, to compile the app and spin it up, execute the command node server.js
5. The port assigned for the exercise is 3002. 
6. In chrome, provide the url http://localhost:3002/ to view the app .

# Exercise 2:
1. To run the Exercise 2, In terminal, from home execute cd exercise-2/
2. This takes you to Exercise 2. 
3. Execute the command npm install and this installs all the necessary node modules required for the project. These modules are picked from the package.json file
4. Now, to compile the app and spin it up, execute the command node server.js
5. The port assigned for the exercise is 3002. (Note: Both the exercises are assigned to the same port. Stop one to xompile the other)
6. In chrome, provide the url http://localhost:3002/ to view the app and perform operations.









# *********FYI. BELOW IS THE CODE CHALLENGE THAT WAS GIVEN *******

Exercise 1: Consuming RESTful API data
Query https://5dc588200bbd050014fb8ae1.mockapi.io/assessment for a list of users.
You may use whatever tool you like for making that request (jQuery AJAX, vanilla jqXHR, ES6 fetch API, etc). But do not use a JS framework; that is overkill for this exercise.
Print that data to the DOM in an unordered list.
Use Handlebars to render the data
Each list item must show user name, avatar, created date, and ID
Write unit tests for your JS, using the framework of your choice
Optional Enhancement 1
Only show name and avatar by default; add a button that reveals the ID and created-date on click.
Set up a simple Node server to deliver the app to http://localhost:3000.
Exercise 2: Task Tracker Enhancement
Task Tracker

The above link is to a simple task-tracker app. The JS has many errors and inefficiencies that need to be fixed. There is also additional functionality that has to be added. This is an open-ended assessment meant to measure your skill in key areas like javascript, CSS, HTML, and accessibility.

Solve the problems presented in whatever way you deem most appropriate and in keeping with today's standards, with the following caveats/limitations:

* Vanilla JS only, no jQuery or frameworks. This test is to see if you understand javascript, so no shortcuts.
* Do not use any JS plugins. Same reason as above.
* Use Sass for any styles.
Fixes
Break the contents of the HTML file into pieces that follow a logical separation of concerns for the browser.
Fix any invalid HTML
Fix any JS errors / inefficiencies.
Utilize closures to prevent pollution of the global object with app code
Features
Make the form keyboard-accessible
Add support for localStorage such that refreshing the page does not reset your task list
Add form validation such that an empty task cannot be submitted.
Convert float-based layouts to flexbox-based layouts. The visuals should not change, just the CSS that handles the layout.
Make the design responsive, such that -
The form fills 100% width of the screen up until 375px wide
The form becomes centered in the page after 375px
There should be no horizontal scroll bars present at any width


