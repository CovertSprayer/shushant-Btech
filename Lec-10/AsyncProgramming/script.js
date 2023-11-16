
console.log('Hello');

delay(5);

console.log('Coders');

function delay(n){
    let now = new Date().getTime();
    while(now + n*1000 > new Date().getTime()){
        // console.log(now)
    }   
}
