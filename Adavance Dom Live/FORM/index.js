const name_box= document.getElementById('name');
const email_box= document.getElementById('email');
const password_box=document.getElementById('password');
const confirm_password_box=document.getElementById('confirm_password');
const submit_button=document.getElementById('submit');


// const form = document.querySelector('form');

submit_button.addEventListener('click',validateForm)

function validateForm(eventDeatils){
    let name= name_box.value;
    let email= email_box.value;
    let password= password_box.value;
    let confirm_password= confirm_password_box.value;

 if(name=="" || email=="" || password=="" || confirm_password==""){
     alert('Please fill all the fields BUDDY');
    return
 }
 if(password != confirm_password){
    alert('Passwords do not match');
    return;
 }
  /// email & password validation 
}








