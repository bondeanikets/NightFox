var fs = require("fs");
var http = require("http");
var url = require("url");

http.createServer(function (request, response) {

    var pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " Received.");

    response.writeHead(200);
    console.log('Read Begin for'+pathname)
    if(pathname == "/") {
        html = fs.readFileSync("demo.html", "utf8");
        sign = response.write(html);
	console.log('Read html is '+sign)
    } else if (pathname == "/build/webgazer.js") {
        script = fs.readFileSync("webgazer.js", "utf8");
	//console.log("Script");
        sign = response.write(script);
	console.log('Read webgazer.js is'+sign);

    }else{
    	console.log('Nothing for '+pathname+' is read');
    }


    response.end();
}).listen(8000);

console.log("Listening to server on 8000...");


