Install Node
Check node -v
npm -v

for node cmd 
open cmd type node and enter
write [console.log("Hello World")] and enter

from file create file demo.js write console.log("Hello World") save 
Open cmd go to path and node "filename"

Create server and run node "serverfilename"
https://www.w3schools.com/nodejs/nodejs_http.asp
https://www.w3schools.com/nodejs/met_http_createserver.asp
check server on browser

for package.json 
npm init or npm init -y

if we're using this Sever.js then every time need to restart if any chenge in server
So we are using nodemon 
i = install
for global installation (npm i -g 'packagename') and for local (npm i 'packagename')
https://www.npmjs.com/package/nodemon
https://nodemon.io/
https://imcodebased.com/npm-save-or-save-dev-which-one-to-use/
npm i nodemon --save (for save in pcakcge.json as dependencies) or npm i nodemon --save-dev (for save in pcakcge.json as dev dependencies) 
so it will automatically restart server if any change

now for express
go to https://expressjs.com/

and for server
https://expressjs.com/en/starter/hello-world.html
save this file express.js

for routing 
https://expressjs.com/en/starter/basic-routing.html
pages

for static files
https://expressjs.com/en/starter/static-files.html

for ready mvc structure install 
npm install -g express-generator
https://expressjs.com/en/starter/generator.html

to check installed 
express -h

now create new folder go to path in cmd and give command
express --view=ejs myapp

create new folder myapp and all details are there

https://marketplace.visualstudio.com/vscode