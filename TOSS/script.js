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
let userScore=0;
let ComputerScore=0;
function toss(clickedButton){
    //clickedButton = function(){toss(t)}
    // console.log(clickedButton,)
let userChoise= clickedButton.innerText;
let choices=["Head","Tall"]
 
let randomIndex=parseInt(Math.random()*choices.length);
let computerChoices=choices[randomIndex];

if(userChoise==computerChoices){
//   console.log("User Win")  
userScore++;
}
else{
    // console.log("Computer Win")
    ComputerScore++;

}
scoreArea.innerHTML=`<h3>User: ${userScore}  </h3>  <h3>Computer: ${ComputerScore} </h3>`;

//scoreArea.innerText=`<h3>User: ${userScore}  </h3>  <h3>Computer: ${ComputerScore} </h3>`;
//InnnerText is used to set the text of the specified element. If the element contains child elements, the innerText property will return the text of all child elements. and simpled its return as we need to set the text of the specified element.


}











// how to stylee like css in the js


///  Method 1 //////


// scoreArea.style.color="blue"
// scoreArea.style.border="1px solid red"
//  scoreArea.style.backgroundColor="yellow"
//  scoreArea.style.fontFamily="Arial"




 ////////Method2///////



scoreArea.style.cssText=`

color:green;
border:1px solid green;
background-color:lightyellow;
font-family:Arial;
text-align:center
`



