var x = 5;
function Add_numbers_1() {
    document.write(10 + x + "<br>");
}

function Add_numbers_2() {
    document.write(x + 50);
}

Add_numbers_1();
Add_numbers_2();

function Add_numbers_3() {
    var y = 5;
    document.write(10 + y + "<br>");
}

function Add_numbers_4() {
    document.write(y + 50);
}
Add_numbers_3();
Add_numbers_4();

function get_Date() {
    if (new Date().getHours() < 1430) {
        document.getElementById("wakeup").innerHTML = "If after 1430 hours you can call me I am awake.";
    }
}

function Five() {
    if (5 > 4);
    document.getElementById("five").innerHTML = "5 is my favorite number."
}

function Age_Function() {
    Age = document.getElementById("Age").value;
    if (Age >= 18) {
        Watch = "You are old enough to watch my twitch channel.";
    }
    else { 
        Watch = "You are not old enought to watch my twitch channel.";
    }
    document.getElementById("whatsyourage").innerHTML = Watch;
}

function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Replay = "It is morning time for most people.";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is the afternoon and when I wake up.";
    }
    else {
        Reply = "It is evening and I am at work.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}