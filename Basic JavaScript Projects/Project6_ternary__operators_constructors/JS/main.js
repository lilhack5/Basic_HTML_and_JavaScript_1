function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;//? needs data typed to give a reason to you one or other value
    Can_ride = (Height < 52) ? "You are too short" : "You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride. ";
}

function Vehicle(Make, Model, Year, Color) {//creating a class that can be modified
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");//new to modified class
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML =//construct added from class
        " Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
        " manufactured in " + Erik.Vehicle_Year;
}

function count() {
    document.getElementById("Nested_Function").innerHTML = Count();
    function Count() {
        var Starting_point = 5;//starting point before adding by five or a nested code
        function Plus_five() { Starting_point += 5; }
        Plus_five();
        return Starting_point;
    }
}