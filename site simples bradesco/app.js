'use strict'
const switch = document.querySelector('.btn');
switcher.addEventListener('click', function(){
    document.body.classList.toggle('tema-escuro')
    var className = document.body.className;
if(className =='tema-claro') {
    this.textContent = 'dark'
}
else {
    this.textContent = 'claro';}
});



