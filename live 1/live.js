//////////////////Live class notes//////////////

//  document means complete html page

// .querySelector() - returns the first element that matches a specified CSS selector(s) in the document.
//.querySelectorAll() - returns all elements that match a specified CSS selector(s) in the document.

// .getElementById() - returns an Element object representing the element whose id property matches the specified string.
//.getElementsByClassName() - returns a collection of all elements in the document with the specified class name, as a NodeList object.
//.getElementsByTagName() - returns a collection of all elements in the document with the specified tag name, as a NodeList object.
//.getElementsByName() - returns a collection of all elements in the document with the specified name, as a NodeList object.











//////////////////////////////////////////  END   ///////////////////////////////////////////


document.querySelector()  // returns the first element that matches a specified CSS selector(s) in the document.
document.querySelectorAll()  // returns all elements that match a specified CSS selector(s) in the document.
  document.getElementById()  // returns an Element object representing the element whose id property matches the specified string.

document.getElementsByClassName()  // returns a collection of all elements in the document with the specified class name, as a NodeList object.

let firstLable = document.querySelector("#age-label label"); //#age-label wasr the id of the div/parent div and label was the tag name

let firstlable1 = document.querySelectorAll("#age-label label")[1]; // this will select the second label tag from the div with id age-label.

let form_js = document.querySelector("form[name='search']"); // this will select the form with name search           


let form_js1 = document.getElementsByTagName("form[name='search']"); // this will select the form with name search but this will not work on getElementsByTagName because it returns a collection of all elements in the document with the specified tag name, as a NodeList object. 



let form_js2 = document.getElementsByName("search"); // this will select the form with name search but this will not work on getElementsByName because it returns a collection of all elements in the document with the specified name, as a NodeList object.