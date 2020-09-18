var temperature = 104;
var newtemperature = (temperature - 32) / 1.8;
console.log(temperature + " fahrenheit converts to " + newtemperature + " celsius.");
if (newtemperature <= 10){
    console.log("It is cold");
}else if (newtemperature <= 20){
    console.log("It is warm");
}else if (newtemperature <= 100){
    console.log("It is very hot");
}