const grandParent = document.querySelector('.grand-parent');
const parent = document.querySelector('.parent');
const child = document.querySelector('.child');

grandParent.addEventListener('click', (e)=>{
    console.log('grand-parent clicked!!')
}, false)

parent.addEventListener('click', (e)=>{
    e.stopPropagation();
    console.log('parent clicked!!');
}, false)

child.addEventListener('click', (e)=>{
    console.log('child clicked!!')
}, false)

