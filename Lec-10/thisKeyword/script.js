
// ------------------ default binding
// console.log(this);
// this.x = 10; // window.x = 10;

function createNaam(){
    console.log(this);
    this.naam = 'Abhinav';
}

createNaam();

// ------------------ implicit binding
let person = {
    name:'Neeraj',
    age:22,
    gender:'M',
    sayHello: function(){
        console.log(`Hello! I'm ${this.name}`);
    }
}

console.log(person)
person.sayHello();

// -------------- explicite binding

// call()


// function createProduct(_title, _price, _rating){
//     let obj = {};
//     obj.title = _title;
//     obj.price = _price;
//     obj.rating = _rating;

//     return obj;
// }

// let laptop = createProduct('HP', 60000, 4.0);
// console.log(laptop)



// function createProduct(_title, _price, _rating){
//     this.title = _title;
//     this.price = _price;
//     this.rating = _rating;
// }

// let 
// let laptop = createProduct.call('HP', 60000, 4.0);
// console.log(laptop);

let person1 = {
    name:'abcd',
    age:20
}

let person2 = {
    name:'xyz',
    age:25
}

function updatePerson(name, age){
    this.name = name;
    this.age = age;
}

updatePerson(person1, 'Raghav', 20);
console.log(person1)

updatePerson.call(person1, 'Neeraj', 25);
updatePerson.apply(person2, ['skdhfjksdhfk', 25]);
console.log(person1)
console.log(person2)
