/// usage of form/////////

const name_box= document.getElementById('name');
const email_box= document.getElementById('email');
const password_box=document.getElementById('password');
const confirm_password_box=document.getElementById('confirm_password');
const submit_button=document.getElementById('submit');
const output=document.getElementById('output');
const message = document.querySelector('.message');

const form = document.querySelector('form');

//submit_button.addEventListener('click',validateForm)

form.addEventListener("submit",validateForm)/////////////////new features of form

// let userCount=0
let userArray=[]
function validateForm(eventDeatils){

    eventDeatils.preventDefault();
    let name= name_box.value;
    let email= email_box.value;
    let password= password_box.value;
    let confirm_password= confirm_password_box.value;


    if(name.length < 5) {
        message.innerHTML = "Name should be atleast 5 characters"
        message.className = "error"
        // name_box.style.border="2px solid red"
        // name_box.style.outline="none"
    
        return
    }



 if(name=="" || email=="" || password=="" || confirm_password==""){
    
     message.innerHTML='Please fill all the fields BUDDY';
   

    message.className="error";
    return
 }



 if(password != confirm_password){
    // alert('Passwords do not match');
    message.innerHTML='Passwords do not match';
     message.className="error";
    return;
 }
  // email & password validation 

    if(!email.includes('@')){
        // alert('Email is not valid');
        message.innerHTML='Email is not valid';
         message.className="error";
        return;
    }
    if(password != confirm_password){
        // alert('Password should be atleast 8 characters');
        message.innerHTML='Password should be atleast 8 characters';
         message.className="error";
        return;
    }
  message.innerHTML='Registration Success';
    message.className="success";

    
////DISPLAY////
    // output.innerHTML= output.innerHTML + `

    // <h2> Registration Details</h2>
    // <p>Name: ${name}</p>
    // <p>Email: ${email}</p>
    
    // `


// let heading1 = document.createElement('h1');
// heading1.innerText = "Hello world 1"
   
//     //   output.append(heading1) ///it will show first element
//       output.prepend((heading1)) //// it will show second element first 


// let heading2 = document.createElement('h2');
// heading2.innerText = "Hello world 2"

// output.prepend(heading2)

// let userDetails= document.createElement('div');
// userDetails.id=`user${++userCount}`
// userDetails .innerHTML = `

// <p>Name: ${name}</p>
//      <p>Email: ${email}</p>

// `

// output.append(userDetails)


userArray.push({
    name,email
})

console.log(userArray)






//reset my form

name_box.value="";
email_box.value="";
password_box.value="";
confirm_password_box.value="";

//   redirect to dispay.html

window.location.href="./dispaly.html"

}


// name_box.addEventListener("change",detectError)////its only work when its focouse out


name_box.addEventListener("input",detectError)//its decatet first 


function detectError(){
    let value = name_box.value;
    if(value.length < 5 ){
        name_box.style.border ="2px solid red"
        name_box.style.outline="none"
    }
    else {
        name_box.style.border="2px solid green";
        name_box.style.outline="none";
    }
}







