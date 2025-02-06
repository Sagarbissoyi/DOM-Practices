////////////NOTE/////////////



// get element by id it will return the element with the specified id / one id
// get elements by class name it will return the element with the specified class name / multiple class
// get elements by tag name it will return the element with the specified tag name / multiple tag
// query selector it will return the first element that matches a specified CSS selector(s) / one selector
// query selector all it will return all elements that matches a specified CSS selector(s) / multiple selector
//




/////////////////////NOTE END//////////////////////














// /////////////////////////////////////Dom Traversal/////////////////////////////////////








// //////////////////////////////////////1st Method//////////////////////////////////////







let parentDiv =document.getElementById("parent");
// console.log(parentDiv.parentElement)
console.log(parentDiv.parentNode)
console.log(parentDiv.children)
for(var i=0;i<parentDiv.children.length;i++){
    console.log(parentDiv.children[i].textContent)
}


//how to access child1 element

let child1Div= document.getElementById("child1");
console.log(child1Div.nextElementSibling.nextElementSibling)






///////////////////////////////////////////////////////////////



//////////////////////second method////////////////////////////




let parentDiv1=document.getElementById("parent");
console.log(parentDiv1.firstElementChild)





//////////////////////////////////////////////////////////////////////




/////// //////////////// How to select different elements in DOM////////////////////////////






let element = document.getElementById("child1");
console.log(element);


let element1 = document.querySelector("#child1");
console.log(element1);







//////////////////////////////How to select multiple elements in DOM////////////////////////////






let element2 = document.querySelectorAll("#child1");
console.log(element2);



let element3 = document.querySelectorAll("#child2.child1");
console.log(element3);






//////////////////////////////////





let elem1=document.getElementsByClassName("child1");
console.log(elem1)






///////////////////////////////////




let emem2=document.getElementsByTagName("div");
console.log(emem2)




