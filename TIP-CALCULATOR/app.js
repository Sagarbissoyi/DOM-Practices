//step 1: select the required element

//input,submit button,output sextion

//when a value is enetered inside a input

//identify when submit button is clicked



const input_box=document.getElementById("bill")
const submit_button=document.querySelector("button")


// const output=document.querySelector(".output") ------- it will select the first element with class output

const output = document.getElementsByClassName("output")[0]/////it will give you all element in the form of array



//events and addEventListener 

//it understood that i am doing a specific event and based on that it did some function

//element =>hey add addevent lister if hover is happing show a dialog box


submit_button.addEventListener("click",calculateTip)



function calculateTip(){

// console.log("clicked")
let bill_amount=input_box.value
if(bill_amount===""){
    alert("Please enter the bill amount")
    return
}
// console.log(bill_amount)

let tip=bill_amount*2/100
// 

output.innerText=`Tip is${tip}`
}








