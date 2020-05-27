var http = require('http');

//create a server object:
http.createServer(function (req, res) {

    // Send the http Header
    //HTTP status :200 : OK
    //Content-Type : text/plain
    res.writeHead(200, {'Content-Type':'text/plain'});
    //send response body as "Hello World"
    res.end('Hello World!'); //write a response to the client
    //end the response
}).listen(8081); //the server object listens on port 8080

//Console will print the message
console.log('Server running at http://127.0.0.1:8081');