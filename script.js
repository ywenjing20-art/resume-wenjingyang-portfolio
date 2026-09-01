const button = document.getElementById("langToggle");

button.addEventListener("click",()=>{

const zh=document.querySelectorAll('[data-lang="zh"]');

const en=document.querySelectorAll('[data-lang="en"]');


zh.forEach(item=>{

item.hidden=!item.hidden;

});


en.forEach(item=>{

item.hidden=!item.hidden;

});


});