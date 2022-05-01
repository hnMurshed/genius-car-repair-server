/* 
----------------------
basic setup for node server
----------------------
1. create a folder with mkdir folder-name or with manually
2. npm init or npm init -y
3. npm i express mongodb cors dotenv
4. create index.js file
5. add start: node index.js and start-dev: nodemon index.js into package.json>script
6. requir express cors
7. declare port and app
8. use diddleware cors() to avoid cors error
9. use middleware express.json() to parse the data sent form client
10. then do whatever you need
11. app.listen() to listen the port
12. npm run start-dev

---------------------
mongodb atlas 
----------------------
1. install mongodb
2. login mongodb atlas account
3. create new cluster if needed
4. make connection between your database and server adding your connection string (database>connect) into the application code
5. create a new database for the application
6. create a new database user with password if needed for your new application

------------------
CRUD operation
------------------
1. go to node mongodb crud > fundamentals and follow steps
2. create asynce run funciton
3. and must call run function
*/