const cardDiv=document.querySelector('.card')
cardDiv.addEventListener('click',e =>{
if(e.target.classList.contains('titulo')){
    console.log('Click en titulo');
}else if(e.target.classList.contains('info')){
    console.log("Click en info");
}
})