function apex() {
    var part_1 = "Apex is ";//Breaking a sentence into parts
    var part_2 = "my favorite ";
    var part_3 = "video game to ";
    var part_4 = "play and ";
    var part_5 = "watch in epsorts.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4, part_5);//pick the parts of sentence and order you want to put it
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}

function slice_Method() {
    var Sentence = "My favorite streamer is SweetDreams on twitch.";
    var Section = Sentence.slice(24,36);//choosing what part of the sentence to show on fuction
    document.getElementById("slice").innerHTML = Section;
}

function string_method() {
    var x = 5;
    document.getElementById("Numbers_to_string").innerHTML = x.toString();//sends the var x to html
}

function precisionmethod() {
    var y = 168501984.148968165;
    document.getElementById("Precision").innerHTML = y.toPrecision(5);
}