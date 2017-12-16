const box_card = document.querySelector('.box');

box_card.addEventListener('click', (e) =>{
   if (e.target.className === "back"){
        let card = e.target.parentElement;
        changeClass(card);
        deleteCard(card);
   }
});


function changeClass(card){
    card.classList.add('rotate');
    setTimeout(()=>{card.classList.remove('rotate');}, 2050)
};


let clickedСards = [];
function deleteCard(card){
    clickedСards.push(card);
    if(clickedСards[1]){

        if(clickedСards[0].id + '1' == clickedСards[1].id || clickedСards[0].id == clickedСards[1].id + '1' ){
            clickedСards.forEach((item, i, clickedСards) =>{
            item.classList.add('hide');
        });
            clickedСards = [];
            finish();

         }else{
            clickedСards = [];
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