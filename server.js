var http = require("http");

var request = require("request");
var datos;

request("http://api.openweathermap.org/data/2.5/weather?id=3530597&APPID=79dc5b927ee95b81ad03f7213c49b87b", function(error, response, body){
	datos = body;
	//console.log(body);
	}
);

http.createServer(function(req, res){
	res.writeHead(200, {"Content-Type": "text/json"});
	console.log(req);
	/*var obj = JSON.parse(datos);
	var temp = Math.round(obj.main.temp - 273.15);
	var description = obj.weather[0].description;
	var city = obj.name;
	console.log(obj.name);
*/
	//res.end(JSON.stringify({'temperature': temp, 'description': description, 'name': city}));
	res.end(datos);
	
}).listen(3000);

console.log("Server listening on port 3000");

