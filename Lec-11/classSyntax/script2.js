
class Vehicle{
    constructor(color, np){
        this.color = color;
        this.np = np;
    }

    print(){
        console.log(this.color, this.np);
    }
}

let maruti = new Vehicle('White', '123djsfh12');
// console.log(alto);

class Car extends Vehicle{
    constructor(color, np, seater){
        super(color, np)
        this.seater = seater;
    }

    print(){
        console.log(this.seater)
    }
}

let alto = new Car('White', 'DKFJ389472', 4);
// console.log(alto)
// alto.print();

class ElectricVehicle extends Car{
    constructor(color, np, seater, battery){
        super(color, np, seater);
        this.battery = battery;
    }
}

let nexon = new ElectricVehicle('Yellow', 'EFJSK234', 2, 65);
console.log(nexon)