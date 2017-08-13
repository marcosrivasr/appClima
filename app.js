var app = angular.module("weather-app", []);

app.controller("weather-controller", function($scope, $http){
	
	$scope.activeView = true;

	$http.get("http://api.openweathermap.org/data/2.5/weather?id=3530597&APPID=79dc5b927ee95b81ad03f7213c49b87b")
	.then(function mySuccess(response){
		

		var httpResponse = JSON.stringify(response.data);
		var obj = JSON.parse(httpResponse);

		var weather = new Weather(obj.main.temp, obj.weather[0].description, obj.name);

		$scope.temperature = weather.getKelvinToCelsius();
		$scope.description = weather.description;
		$scope.city = weather.city;
		$scope.icon = weather.icon;

	}, function myError(response){
		console.log(response.statusText);
		$scope.activeView = false;
		

	});	
});






