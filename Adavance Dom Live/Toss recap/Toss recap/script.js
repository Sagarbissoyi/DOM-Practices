let btns = document.querySelectorAll('button');
let scoreArea=document.querySelector('.scoreArea')




//btns[0]
//btn[1]


// btns[0].addEventListener('click', toss)
// btns[1].addEventListener('click', toss)

for(let t of btns){
    t.addEventListener('click',function()
       {toss(t)}
)
}

// function addEventListener(t1,t2){
// //t2= function(){toss(t)}

// //function t2(){
// // toss(t)
// // }



//     t2()
// }
 function toss(eventDetails,a){
    console.log(eventDetails,a)
 }