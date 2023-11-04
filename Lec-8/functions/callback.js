
data = [
    {l:5, b:5}, 
    {l:10, b:6}, 
    {l:8, b:4}, 
    {l:6, b:16}
];


var area = (a,b) => a*b;
var perimeter = (a,b) => 2*(a+b);

// var calculatedArea = [];
// var calculatedPerimeter = [];

// for(let rect of data){
//     calculatedArea.push(area(rect.l, rect.b));
// }

// for(let rect of data){
//     calculatedPerimeter.push(perimeter(rect.l, rect.b));
// }

function calculate(data, logic){
    var output = [];
    
    for(let rect of data){
        output.push(logic(rect.l, rect.b));
    }

    return output;
}

var calculatedArea = calculate(data, area);
var calculatedPerimeter = calculate(data, perimeter);

console.log(calculatedArea);
console.log(calculatedPerimeter);


// calculate ---> HOF (High order Function)
// login --> callback function

console.log(10 === '10');