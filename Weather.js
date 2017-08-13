var Weather = function(temperature, description, city){
	this.temperature = temperature;
	this.description = description;
	this.city = city;
	this.icon = this.description.replace(" ", "-");
	this.getKelvinToCelsius = function(){
		return Math.round(this.temperature - 273.15);
	}
}