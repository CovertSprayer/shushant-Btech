let obj = {
    name:'Anurag',
    age:30,
    marks:[10, 8, 7],
    totalMarks: function(){
        return this.marks[0] + this.marks[1] + this.marks[2];
    }
}

const data = JSON.stringify(obj);
console.log(data);
console.log(JSON.parse(data));

// console.log(JSON);