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
        }else{
            arr = [];
        }
    }
};