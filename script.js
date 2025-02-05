//////1/////





let parentDiv=document.getElementById("parent");
console.log("parent",parentDiv)

parentDiv.innerHTML=parentDiv.innerHTML + "<h3>bye bye sagar</h3>"



console.log("innerText", parentDiv.innerText);
console.log("innerContent", parentDiv.textContent)


parentDiv.textContent = "My name is Sagar"






//////2/////







let body = document.getElementById("my-body");
// body.innerHTML+= "<div> Hii this is appended</div>"

/////////////////////////////////////////////////////////////////////////////deling with element this way///////////////////////////////////////////////////
let elem= document.createElement("div");
elem.setAttribute("class" , "my-div");
elem.setAttribute("id" , "new-div");

elem.textContent = "Hi i am new DIV";
//////////////////     a    ////////////////////
elem.style.backgroundColor="blue";
elem.style.color="white";
elem.style.padding="10px";
elem.style.margin="10px";
elem.style.borderRadius="100px";
elem.style.border="20px solid black"

/////one line code for all above//////   b    /////
//elem.style.cssText="background-color:blue; color:white; padding:10px; margin:10px; border-radius:10px; border:20px solid black;"

console.log(elem);
body.appendChild(elem);





















































let bt = document.getElementById("btn")
bt.addEventListener("click", function(){
    body.innerHTML += "<div> Hii this is appended</div>"
    console.log(bt)
})