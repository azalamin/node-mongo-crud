/**
 * ---------------------------
 * Initial Setup
 * ---------------------------
 * 1. Create a node server with five steps
 * 1.1 create folder
 * 1.2 npm init
 * 1.3 npm i express cors mongodb 
 * 1.4 script-dev: nodemon index.js
 * 1.5 create index.js
 * 1.6 create 5 steps to create node server 
 * 
 * ---------------------------
 * Create Atlas Account
 * ---------------------------
 * 1. signup with google or manually
 * 2. create a cluster
 * 3. create a user (dbUser1) and password
 * 4. network access => ip address: allow all 
 * 5. database > Connect > code  copy and paste in index.js 
 * ---------------------------
 * CURD Operation 
 * ---------------------------
 * 1. node mongodb curd (search ) > Fundamentals
 * 2. create the async run function 
 * ----------------------------------------------
 * Integrate sending data from client to server
 * ----------------------------------------------
 * 1. Client side: create a form
 * 2. on submit get form data and create user object
 * 3. on server: create user POST method to receive data on the backend
 * 4. on client side: set fetch with post, headers, body
 * 5. make sure you return json from server post api
 * ----------------------------------------------
 * Load data to the client side 
 * ----------------------------------------------
 * 1. create a get api on the server side
 * 2. create a query object
 * 3. collection.find(query)
 * 4. cursor.toArray() 
 * 5. return the result
 * 6. from client useEffect and display like you have done before
 * ----------------------------------------------
 * Delete 
 * ----------------------------------------------
*/