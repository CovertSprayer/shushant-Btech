const btn = document.querySelector('button');
const inp = document.querySelector('input');
const form = document.querySelector('form');
const formBtn = document.querySelector('form button')
const p = document.querySelector('p');

// console.dir(btn);
// btn.onclick = function(){
//     console.log('clicked!')
// }

// btn.onclick = function(){
//     console.log('hello from clicked event')
// }

btn.addEventListener('click', function(e){
    console.log(e.target)
    console.log('clicked!');
})

btn.addEventListener('dblclick', function(){
    console.log('hello from clicked event');
})

// ----------- keyboard -> keydown, keyup
inp.addEventListener('keyup', (e)=>{
    console.log(e)
    console.log('key pressed!!')
})

document.addEventListener('scroll', (e)=>{
    console.log(window.scrollY);
    const rect = p.getBoundingClientRect();
    console.log(rect)
})

form.addEventListener('submit', function(e){
    e.preventDefault();

    console.log(this);
    console.log(e.target);
    console.log(inp.value);
    inp.value = '';
    // console.log('submitted!!')
})




