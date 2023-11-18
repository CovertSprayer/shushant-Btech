
function Student(name, age){
    this.name = name;
    this.age = age;
    
}

Student.prototype.sayHello = 'this is string'

console.log(window)
let s1 = new Student('Abhishek', 30);
let s2 = new Student('Rohit', 25);