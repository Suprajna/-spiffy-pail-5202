document.querySelector("form").addEventListener("submit",pamentfun)
function pamentfun(){
    event.preventDefault();
    let name=document.querySelector("#nam").value;
    let card=document.querySelector("#card").value;
    let cvv=document.querySelector("#cvv").value;
    let expdate=document.querySelector("#exp").value;
    let otp=document.querySelector("#otp").value;
if(name==""){
    alert("Enter correct details");
};

if(card==1234 && cvv==123 && expdate=="05/25"){
alert("Your details in processing... please wait few second..");
}else{
    alert("Enter correct Details!!!");
};
}
function btnFun(){
    alert("Your OTP is :-  3421");
}
function otpFun(){
    if(otp==123654){
        alert("Invalid OTP Please Enter Again !!!");
    }else{
        alert("Payment Successful Thanks for Visiting !!!!");
    };
}
