const children = document.querySelectorAll('.child');
const parent = document.querySelector('.parent');
// children.forEach((child)=>{
//     child.addEventListener('click', (e)=>{
//         console.log(e.target);
//     })
// })

    // for(let child of children){
    //     child.addEventListener('click', (e)=>{
    //         console.log(e.target.innerText);
    //     })
    // }

parent.addEventListener('click', (e)=>{
    if(e.target.classList.contains('child')){
        console.log(e.target.innerText)
    }
})
