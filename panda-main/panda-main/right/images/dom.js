//1 complete


var spanElements = document.getElementsByTagName ('h2'); 
for (var i = 0; i < spanElements.length; i++) 
{ spanElements [i].style.color = 'lightblue'; }
// 1 complete

//2
const bg =document.getElementById('backpack');
bg.style.backgroundColor = 'tomato';
bg.style.paddingBottom ='30px';
//2 complete

//3
const Card =document.getElementsByClassName('card');
for(let i=0; i<Card.length;i++){
    Card[i].style.borderRadius = '30px';
}

//3 complete
//4
function Show(){
    console.log('Hello dear');
}
//4 complete
//5

// const buyNow = document.querySelectorAll('.buy-now');
// for(let i=0;i<buyNow.length;i++){
//     buyNow.addEventListener('click', function(){
//         style.display ='none';
//     })
// }


//          remove by for each.          ////

// let boxes =document.querySelectorAll('.buy-now');
// boxes.forEach(box => {
//   box.addEventListener('click', function handleClick(event) {


//     box.setAttribute('style', 'display: none;');
//   });
// });

//           remove by child             ////

// let bremoves =document.getElementsByClassName('buy-now');
// for(let bremove of bremoves){

//   bremove.addEventListener('click', function(event){
//     event.target.remove(event.target);
//   })

// }
//      remove by parent.        ///

// document.getElementById('cardfot').addEventListener('click', function(event){
//   event.target.parentNode.removeChild(event.target);
// });


//5