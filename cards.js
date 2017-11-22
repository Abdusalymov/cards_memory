const box_card = document.querySelector('.box');

box_card.addEventListener('click', function(e){
     let el = e.target.parentElement;
     changeClass(el);
     deleteElements(el);
});


function changeClass(el){
    el.classList.add('rotate');
    
    setTimeout(function(){
        el.classList.remove('rotate');
     }, 1550)
};


let arr = [];
function deleteElements(el){
    arr.push(el);
    if(arr[1] != undefined){
        if(arr[0].id + '1' == arr[1].id || arr[0].id == arr[1].id + '1' ){
            arr.forEach(function(item, i, arr){
                item.classList.add('hide');
            });
            arr = [];
            finish();
        }else{
            arr = [];
        }
    }
};



function finish(){
   let allCards = box_card.children;
   let counter = 0;
   for(let i= 0; i < allCards.length; i++  ){
        if(allCards[i].classList.contains('hide')){
            counter ++;
         }if(counter == allCards.length){
            box_card.innerHTML = '<h1>You are Winner!<h1>';
         }
   }
    
    
};