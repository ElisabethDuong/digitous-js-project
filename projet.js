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
    rover.direction = "W";
    console.log(rover);
}
turnLeft(rover);


function turnRight(rover) {
    rover.direction = "E";
    if (rover.direction === "E") {

    }
    console.log(rover);
}
turnRight(rover);

// 03 -  Le déplacement

function moveForward(rover) {

    for (var i = 0; i < grid.length; i++) {
        for (var j = 0; j < grid[i].length; j++) {
            rover.x += 1;
        }
    }
    //rover.y;
    console.log(rover)
}
moveForward(rover);