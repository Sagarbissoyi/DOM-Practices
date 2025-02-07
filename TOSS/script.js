let btns = document.querySelectorAll('button');
let scorArea=document.querySelector('scoreArea')




//btns[0]
//btn[1]


// btns[0].addEventListener('click', toss)
// btns[1].addEventListener('click', toss)

for(let t of btns){
    t.removeEventListener('click',toss)
}

function toss(){
    console.log("I am clicked")
}
