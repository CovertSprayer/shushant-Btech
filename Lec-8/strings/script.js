var str = "This Is Some String";

console.log(str);

console.log(str.toLowerCase());
console.log(str.toUpperCase());

var str1 = 'Hello';
var str2 = 'Coders';

// console.log(str1.concat(" ", str2));
// console.log(str1 + " " + str2);

var username = '       abhishek     ';
console.log(username.trimStart());
console.log(username.trimEnd());
console.log(username.trim());

console.log(str.substring(13, str.length));
console.log(str.split(' '));

var ip ='192.168.0.1';
console.log(ip.split('.'));

var myself = 'His name is Shreyance. Shreyance is a Web Dev Mentor.';
console.log(myself.replace('Shreyance', 'Mohit'));
console.log(myself.replaceAll('Shreyance', 'Mohit'));

// -------------------- exercise
var data = ['mohit.jpg', 'rohit.jpeg', 'sunil.png', 'abhishek.pdf', 'shubham.txt'];
var format = ['jpeg', 'jpg', 'png'];

for(var item of data){
    var fileFormat = item.split('.')[1];
    if(format.indexOf(fileFormat) != -1){
        console.log(item);
    }
}