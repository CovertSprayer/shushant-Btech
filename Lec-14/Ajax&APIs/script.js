const url = 'https://dummyjson.com/products';
const list = document.querySelector('.list');

const btn = document.querySelector('button')
btn.addEventListener('click', ()=>{
    list.innerText = '';
    
    fetch(url)
        .then((res)=>{
            return res.json();
        })
        .then((data)=>{
            // console.log(data.products);

            for(let item of data.products){
                // console.log(item.title);
                const li = document.createElement('li');
                li.innerText = item.title;
                list.append(li);
            }
        })
})

