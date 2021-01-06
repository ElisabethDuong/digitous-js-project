// MARS ROVER 


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
};


// 02 - Functions Left Right

function turnLeft(rover) {
    if (rover.direction === "N") {
        rover.direction = "W";
        console.log("Direction NW", rover.direction);
    } else if (rover.direction === "W") {
        rover.direction = "S";
        console.log("Direction WS", rover.direction);
    } else if (rover.direction === "S") {
        rover.direction = "E";
        console.log("Direction SE", rover.direction);
    } else {
        rover.direction = "N";
        console.log("Direction EN", rover.direction);
    }
    console.log(rover);
};


function turnRight(rover) {

    if (rover.direction === "N") {
        rover.direction = "E";
        console.log("Direction NE", rover.direction);
    } else if (rover.direction === "E") {
        rover.direction = "S";
        console.log("Direction ES", rover.direction);
    } else if (rover.direction === "S") {
        rover.direction = "W";
        console.log("Direction SW", rover.direction);
    } else {
        rover.direction = "N";
        console.log("Direction WN", rover.direction);
    };
    console.log(rover);
};

turnRight(rover);
turnLeft(rover);


// 04 -  Function Forward

function moveForward(rover) {
    if (rover.direction === "N") {
        rover.y = rover.y - 1;
        console.log("Forward N", rover.y);
    } else if (rover.direction === "S") {
        rover.y = rover.y + 1;
        console.log("Forward S", rover.y);
    } else if (rover.direction === "E") {
        rover.x = rover.x + 1;
        console.log("Forward E", rover.x);
    } else {
        rover.x = rover.x - 1;
        console.log("Forward W", rover.x);
    }
    console.log(rover)
}

moveForward(rover);