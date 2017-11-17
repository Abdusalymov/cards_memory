const box_card = document.querySelector('.box');

box_card.addEventListener('click', function(e){
     let el = e.target.parentElement;
     el.classList.add('rotate');
     
     setTimeout(function(){
        el.classList.remove('rotate');
     }, 2500)
     
});
