/* 
Server deploy steps on Heroku

---------------------
One Time for a computer
------------------------
1. create a Heroku account
2. install Heroku cli
3. heroku login

------------------------
for each project one time
-------------------------
1. heroku create
2. make sure you push your changes to your git
3. git push heroku main
4. Go to heroku dashboard > current project > settings > reveal config vars
5. Copy and paste config vars from .env file
6. Make sure you have whitelisted all ip to access mongobd

-----------------------
update server after each change
-------------------------------
1. push your last changes to your git
2. git push heroku main
*/