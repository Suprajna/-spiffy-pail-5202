let form=document.querySelector("form");
let signUpData=JSON.parse(localStorage.getItem("signUpData"))||[];
form.addEventListener("submit",function(event){
    event.preventDefault();
    let data={
        email:form.email.value,
        password:form.pass.value,
    }
    if(checkLogin(data.email,data.password)===true){
        localStorage.setItem("login",JSON.stringify(signUpData));
        alert("Log In Successfully");
        window.location.href="index1.html";
    }else{
        alert("Wrong Email or Password");
    }
})
function checkLogin(email,password){
        let filtered=signUpData.filter(function(elem){
            return elem.email===email && elem.password===password;
        })
        if(filtered.length>0){
            return true;
        }else{
            return false;
        }
}