
class Person{
    constructor(name, age, gender){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    print(){
        console.log(this.name, this.age, this.gender)
    }

    // setter and getter
    set setAge(age){
        this.age = age;
    }

    get getAge(){
        return this.age;
    }

    static fun() {
        console.log('Inside static function');
    }
}

let p1 = new Person('Rohit', 25, 'M');
p1.setAge = 35;
// Person.fun();
console.log(p1.getAge)
console.log(p1);

