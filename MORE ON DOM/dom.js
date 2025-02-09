



function myFunction(){

// Multiple Elements / multiple table,card create using forEach loop...

let body = document.getElementById("my-body");


let arr =[
    {
        heading:"My Heading",
        text:"This is some Text"
    },
    {
        heading:"My Heading 2",
        text:"This is some Text 2"
    },
    {
        heading:"My Heading 3",
        text:"This is some Text 3"
    },
    
]


///////////////////////// 1st Method //////////////////////////


// arr.forEach((item,i)=>{       // and it also use (arr.map)

//     body.innerHTML +=
//     ` 
//    <div class="my-card">
//    <h1>${item.heading}</h1>
//    <p>${item.text}</p>
//    </div>
//    `
// })



////////////i////////////////
// body.innerHTML +=
//  ` 
// <div class="my-card">
// <h1>Simple Heading</h1>
// <p>This is some Text</p>
// </div>
// `




////////////////////////////////2nd Method//////////////////////////

////apneding method

arr.map((item,i)=>{

let myCard = document.createElement("div");
myCard.setAttribute("class","my-card");
myCard.setAttribute("id",`my-card-${i}`);
let heading= document.createElement("h1");
heading.textContent=item.heading;
let text= document.createElement("p");
text.textContent=item.text;

myCard.appendChild(heading);
myCard.appendChild(text);
myCard.addEventListener("click",(e)=>myfnc(i,e)) ///e->event 

body.appendChild(myCard);

})
function myfnc(i,e){
    console.log("You clicked on ",i,"is the card");
console.log(arr[i,e])

console.log(e.target)
let cardClicked = document.getElementById(`my-card-${i}`);

cardClicked.style.backgroundColor="red";
}






}

myFunction();
myFunction();
