/*
// function log(message){
//     console.log(message);
// }

// var message = 'Hello World';

// log (message);

// no terminal -> tsc main.ts
//para criar o arquivo main de JS
*/
/*
// function doSomething(){
//     for (var i = 0; i < 5; i++){
//         console.log(i);
//     }

//     console.log("finally: " + i);
// }

// doSomething();
*/
/*
let count = 5;
count = 'a';
//retorna erro pelo fato dela considerar o count como um numero, e não string
*/
/*
let a: number;
let b: boolean;
let c: string;
let d: any;
let e: number[] = [1, 2, 3];
let f: any[] = [1, true, 'a', false];

const ColorRed = 0;
const ColorGreen = 1;
const ColorBlue = 2;

enum Color { Red = 0, Green = 1, Blue = 2 };
let backgroundColor = Color.Red;
*/
/*
let message;
message = 'abc';
let endsWithC = (<string>message).endsWith('c');
let alternativeWay = (message as string).endsWith('c');
*/
/*
let log = function(message){
    console.log(message);
}

let doLog = (message) => console.log(message);
*/
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.draw = function () {
        console.log("X: " + this.x + ", Y: " + this.y);
    };
    Point.prototype.getDistance = function (another) {
        //...
    };
    return Point;
}());
var point = new Point(1);
//point.x = 1;
//point.y = 2;
point.draw();
// let drawPoint = (point: Point ) => {
//     //...
// }
// let getDistance = (pointA: Point, pointB: Point) => {
//     //...
// }
// drawPoint({
//     x: 1,
//     y: 2
// })
