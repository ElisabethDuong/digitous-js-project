// MARS ROVER 


// 01 

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


// 02 
function turnLeft(rover) {
    if (rover.direction === "N") {
        rover.direction = "W";
        console.log("direction NW", rover.direction);
    } else if (rover.direction === "W") {
        rover.direction = "S";
        console.log(rover)
    } else if (rover.direction === "S") {
        rover.direction = "E";
        console.log(rover)
    } else {
        rover.direction = "S";
        console.log(rover);
    }
    console.log(rover);
}



function turnRight(rover) {

    if (rover.direction === "N") {
        rover.direction = "E";
        console.log("Direction NE", rover.direction);
    } else if (rover.direction === "E") {
        rover.direction = "S";
    } else if (rover.direction === "S") {
        rover.direction = "W";
    } else {
        rover.direction = "N"
    };

    console.log(rover);
}
turnRight(rover);

// 03 -  Le déplacement

function moveForward(rover) {
    if (rover.direction === "N") {
        rover.y = rover.y - 1;
    } else if (rover.direction === "S") {
        rover.y = rover.y + 1;
    } else if (rover.direction === "E") {
        rover.x = rover.x + 1;
    } else {
        rover.x = rover.x - 1;
    }

    console.log(rover)
}
moveForward(rover);