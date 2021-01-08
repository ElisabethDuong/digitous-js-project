// MARS ROVER 
var prompt = require("prompt");
prompt.start();

// 01 - Global Variables

var grid = [
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "]
];

var rover = {
    direction: "N",
    x: 0,
    y: 0,
    travelLog: [],
};



// 02 - Functions Left Right

function turnLeft(rover) {
    if (rover.direction === "N") {
        rover.direction = "W";
        console.log("Direction NW:", rover.direction);
    } else if (rover.direction === "W") {
        rover.direction = "S";
        console.log("Direction WS:", rover.direction);
    } else if (rover.direction === "S") {
        rover.direction = "E";
        console.log("Direction SE:", rover.direction);
    } else if (rover.direction === "E") {
        rover.direction = "N";
        console.log("Direction EN:", rover.direction);
    }
    console.log("ligne mystère", rover);
};


function turnRight(rover) {

    if (rover.direction === "N") {
        rover.direction = "E";
        console.log("Direction NE:", rover.direction);
    } else if (rover.direction === "E") {
        rover.direction = "S";
        console.log("Direction ES:", rover.direction);
    } else if (rover.direction === "S") {
        rover.direction = "W";
        console.log("Direction SW:", rover.direction);
    } else if (rover.direction === "W") {
        rover.direction = "N";
        console.log("Direction WN:", rover.direction);
    };
    console.log(rover);
};

turnRight(rover);
turnLeft(rover);


// 03 - Keys x y (cf // 01)


// 04 - Function Forward

function moveForward(rover) {

    // rover.travelLog.push("[" + rover.x + "," + rover.y + "]");
    rover.travelLog.push(`[${rover.x}, ${rover.y}]`);

    // if () {

    // }


    if (rover.direction === "N") {
        rover.y = rover.y - 1;
        console.log("Forward N:", rover.y);
    } else if (rover.direction === "S") {
        rover.y = rover.y + 1;
        console.log("Forward S:", rover.y);
    } else if (rover.direction === "E") {
        rover.x = rover.x + 1;
        console.log("Forward E:", rover.x);
    } else if (rover.direction === "W") {
        rover.x = rover.x - 1;
        console.log("Forward W:", rover.x);
    }
    console.log(rover)
}

moveForward(rover);


// 05 - Command

function pilotRover(lrf) {

    for (var i = 0; i < lrf.length; i++) {

        var movement = lrf.charAt(i);
        console.log("generalMove", movement);

        if (movement === "l") {
            turnLeft(rover);
            console.log("Turn to the left:", movement);
        } else if (movement === "r") {
            turnRight(rover);
            console.log("Turn to the right:", movement);
        } else if (movement === "f") {
            moveForward(rover);
            console.log("Move forward:", movement);
        }
    }
};

pilotRover("lrf");


// 06 - Coordinates History (cf // 04)


// 08 - Pilot With prompt

prompt.get(['lrf'], function(err, result) {
    //
    pilotRover(result.lrf);
    //
    console.log('Command-line input received:');
    console.log('  lrf: ' + result.lrf);
});