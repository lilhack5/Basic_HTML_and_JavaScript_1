function myDictionary() {//creating a dictionary
    var Animal = {
        Species: "Dog",
        Color: "Black",
        Breed: "Labrador",
        Age: 5,
        Sound: "Bark!"
    };
    delete Animal.Sound;// used to delete an operator. in html it shows undifined
    document.getElementById("Dictionary").innerHTML = Animal.Sound;
}