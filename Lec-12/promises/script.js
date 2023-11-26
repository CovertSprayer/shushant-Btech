
// let kalMilenge = false;

// let ourPromise = new Promise((resolve, reject)=>{
//     setTimeout(() => {
//         if(kalMilenge){
//             resolve('toffee');
//         }
//         reject('no toffee');
//     }, 4000);
// })

// ourPromise
//     .then((data)=>{
//         console.log('maine', data, 'khalia')
//     })
//     .catch((err)=>{
//         console.log(err);
//     })


function getData(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            data = [
                {name:'Laptop',price:40000,rating:3},
                {name:'Smart Phone',price:20000,rating:4},
                {name:'TV',price:80000,rating:4.4}
            ]

            resolve(data);
        }, 3000);
    })
}

getData()
    .then((data)=>{
        let filteredData = data.filter((item, ind)=>{
            return item.rating >= 4;
        })

        console.log(filteredData);
    })