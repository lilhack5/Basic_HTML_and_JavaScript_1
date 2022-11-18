function Call_Loop() {//the id for the button
    var Digit = "";
    var x = 1;
    while (x < 6) {//counting to 5
        Digit += "<br>" + x;
        x++;
    }
    document.getElementById("Loop").innerHTML = Digit;// the p id
}

//using for loop string
var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

//using array to pick which one to use
function array_Function() {
    var apex_legend = [];
    apex_legend[0] = "Seer";
    apex_legend[1] = "Caustic";
    apex_legend[2] = "Valk";
    apex_legend[3] = "Horizon";
    apex_legend[4] = "Wraith";
    apex_legend[5] = "Fuse";
    document.getElementById("Array").innerHTML = "My favorite legend to play in Apex is " +
        apex_legend[5] + ".";
}

//using constant to set things up inside the function
function constant_function() {
    const Musical_Instruments = { type: "guitar", brand: "Fender", color: "black" };
    Musical_Instruments.color = "blue";
    Musical_Instruments.price = "500";
    document.getElementById("Constant").innerHTML = "The cost of the " +
        Musical_Instruments.type + " was " + Musical_Instruments.price;
}

//let functions
var x = 5;
document.write(x);
{
    let x = 555;
    document.write("<br>" + x);
}
document.write("<br>" + x);

//object method
let car = {
    make: "Dodge ",
    model: "Viper ",
    year: "2022 ",
    color: "teal ",
    description: function () {
        return "The car is a " + this.year + this.color + this.make + this.model;
    }
};
document.getElementById("Car_object").innerHTML = car.description();