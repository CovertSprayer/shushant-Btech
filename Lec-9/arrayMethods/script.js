var arr = [10,20,30,40];
console.log('Value of array is', arr);
console.log(`Value of array is ${arr}`);

// var name = 'Mohan';
// var age = 26;

// console.log('My name is', name , 'and my age is', age)
// // console.log(`My name is ${name} and my age is ${age}`)

// ------------ map
var newArr = arr.map((num, index, arr)=>{
    // console.log(index, num, arr)
    return num*2;
})

// console.log(arr);
// console.log(newArr);

var data = [
    {
        title:'Iphone 16',
        price:100000,
        desc:'White Col, 1TB ROM, 16GB RAm',
        rating:4.2
    },
    {
        title:'Macbook ultra pro max',
        price:200000,
        desc:'Slimmest, light weight, 32GB RAM, 500GB SSD',
        rating:3.8
    },
    {
        title:'Smart TV',
        price:30000,
        desc:'Alomed Display, touch screen, Higher sensing',
        rating:4
    },
    {
        title:'Car',
        price:600000,
        desc:'20Kmpl mileage, black color, 4 Wheel Drive, quad disc',
        rating:4.5
    }
]

var newData = data.map((item, ind)=>{
    // if(item.price >= 100000){
    //     item.price -= 50000;
    // }

    // return item;
    return `<li>${item.price}</li>`
})

// console.log(newData);

var filteredData = data.filter((item, ind)=>{
    if(item.rating > 4) {
        return true;
    }
    else {
        return false;
    }

    // return item.rating > 4;
})

console.log(filteredData);

var totolPrice = data.reduce((acc, item, ind)=>{
    return acc + item.price;
}, 0);

console.log(totolPrice);

data.forEach((item, ind)=>{
    console.log('Title', item.title);
})