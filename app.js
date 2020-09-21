
function addtemperature(temperature){
    newtemperature = (temperature - 32) / 1.8;
    console.log(temperature + " Fahrenheit converts to " + newtemperature + " Celcius.");
    if (newtemperature <= 5){
        console.log("It is very cold");
    }else if (newtemperature <= 15){
        console.log("It is cold");
    }else if (newtemperature <= 25){
        console.log("It is warm");
    }else if (newtemperature <= 100){
        console.log("It is very hot")};
}
    
addtemperature(15);
addtemperature(100);
