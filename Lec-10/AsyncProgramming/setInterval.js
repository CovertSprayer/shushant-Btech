

let id = setInterval(() => {
    console.log('Hello from set Interval!')
}, 1000);

setTimeout(() => {
    clearInterval(id);
}, 2000);