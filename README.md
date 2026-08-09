# MERN_TEMPLATE
## setup
- install node.js
- install MS Code (not needed but I use the CLI of it for the setup)
- Create a folder structure somewhere that looks like this

projectName

|->backend
  
|->frontend

- open MS Code and oeen <projectName>
- CTL+J to open the CLI
- cd ./backend/
- npm init -y
- npm install express
- npm install mongoose
- npm install nodemon

- copy over the /backend/src/ folder to your projectName/backend/ folder
  
- edit the package.json file that was generated:
  - modify "scripts" to the following

 ```
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "nodemon src/server.js",
    "production": "node src/server.js"
  },
```
- modify "type": to "type":"module"

## backend
### what's working
- basic backend folder structure
- simple API call for get, post, put, delete
- endpoint has a route file linked to it
- route file has controller file linked to it

### known issues
- none

### what coming
- simple mongoDB connection
- simple mongoDB query

## Frontend

haven't started yet
