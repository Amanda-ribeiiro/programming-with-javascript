// Task 1
var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake'];
function logDairy () {
    for (var i = 0; i < dairy.length; i++) {
        console.log(dairy[i]);
    }
}
logDairy();

// Task 2
const animal = {
    canJump: true
};

const bird = Object.create(animal);
bird.canFly = true;
bird.hasFeathers = true;

function birdCan() {
    for (let key in bird) {
        if (bird.hasOwnProperty(key)) {
            console.log(`${key}: ${bird[key]}`);
        }      
    }
}
birdCan();
// Task 3
function animalCan() {
    for (item in bird) {
        console.log(`${item}: ${bird[item]}`);
    }
}
animalCan();



