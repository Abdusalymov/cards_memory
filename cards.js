const box_card = document.querySelector('.box');

box_card.addEventListener('click', function(e){
     let el = e.target.parentElement;
     changeClass(el);
     deleteEq(el);
});

function changeClass(el){
    el.classList.add('rotate');
    
    setTimeout(function(){
        el.classList.remove('rotate');
     }, 2050)
};

let arr = [];
function deleteEq(el){
    let elem1 = el;
    arr.push(elem1);
 

    if(arr[1] != undefined){
        if(arr[0].dataset.marker == arr[1].dataset.marker){
            alert('work');
            arr.forEach(function(item, i, arr){
                item.style.display = 'none';
            });
            arr = [];
        }else{
            alert('isnt work');
            arr = [];
        }
    }else{
        alert('fack');
    }

    
      
    
}