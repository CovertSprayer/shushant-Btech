
// datatypes and variables(var, let, const)
// datatypes -> number, boolean, string, undefined, object, funtion

// ------------------ number
var a = 10;
console.log(a);

b = 20; // var b = 20;
console.log(a + b);

var c = 20.34;
console.log(typeof c);

// ----------------- boolean
var isvalid = false;
console.log(typeof isvalid);


// ------------------ string
var str1 = "This is some string";
var str2 = 'T';

console.log('Hello Coders', str1);
console.log(typeof str2);

// -------------- array
var nums = [1, 2, 3, 4, 5];
var arr = [1, 2, true, 'Hello', ['a', 'b', 'c']];
console.log(nums[2]);
console.log(arr[4][1]);

// ---------------- object

var student = {
    'full name':'Shushant',
    age:26,
    isAdult:true,
    address:'Noida, Ind',
    contact:9090909090,
    gender:'M'
};

console.log(student);
console.log(student["full name"]);
console.log(student.address);
console.log(student.gender);

