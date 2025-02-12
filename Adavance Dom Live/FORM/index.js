const name_box= document.getElementById('name');
const email_box= document.getElementById('email');
const password_box=document.getElementById('password');
const confirm_password_box=document.getElementById('confirm_password');
const submit_button=document.getElementById('submit');
const output=document.getElementById('output');
const message = document.querySelector('.message');

// const form = document.querySelector('form');

submit_button.addEventListener('click',validateForm)

function validateForm(eventDeatils){

    eventDeatils.preventDefault();
    let name= name_box.value;
    let email= email_box.value;
    let password= password_box.value;
    let confirm_password= confirm_password_box.value;

 if(name=="" || email=="" || password=="" || confirm_password==""){
    //  alert('Please fill all the fields BUDDY');
    //  message.innerHTML='Please fill all the fields BUDDY';
    //  message.style.color='red';

    message.className="error";
    return
 }
 if(password != confirm_password){
    // alert('Passwords do not match');
     message.className="error";
    return;
 }
  /// email & password validation 

    if(!email.includes('@')){
        // alert('Email is not valid');
         message.className="error";
        return;
    }
    if(password.length<8){
        // alert('Password should be atleast 8 characters');
         message.className="error";
        return;
    }
    message.innerHTML="Form Submitted Successfully";
    message.className="success";
////DISPLAY////
    output.innerHTML=`

    <h2> Registration Details</h2>
    <p>Name: ${name}</p>
    <p>Email: ${email}</p>
    <p>Password: ${password}</p>
    `

}








