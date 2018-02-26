module.exports = function solveEquation(equation) {
function Numsort(a, b) {
    if (a > b) return 1;
    if (a < b) return -1;
}
let arr = equation.split(' ');
let a = Number(arr[0]);

let c = 0;
if (arr[7] === '-'){c = -Number(arr[8]);}
else {c = Number(arr[8]);}

let b = 0;
if (arr[3] === '-'){b = -Number(arr[4]);}
else {b = Number(arr[4]);}

let D = b**2 - 4*a*c;

let x_1 = (-b + Math.sqrt(D))/(2*a);
let x_2 = (-b - Math.sqrt(D))/(2*a);

let result = new Array(Math.round(x_1), Math.round(x_2));

return result.sort(Numsort);
}
