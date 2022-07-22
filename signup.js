let form=document.querySelector("form");
    let signUpData=JSON.parse(localStorage.getItem("signUpData"))||[];
    form.addEventListener("submit",function(event){
        event.preventDefault();
        let data={
             name:form.name.value,
             email:form.email.value,
             password:form.pass.value,
             
        }
        
        // if return true means you can signup if return false means you can not signup
        if(checkEmails(data.email)===true){
            signUpData.push(data);
            localStorage.setItem("signUpData",JSON.stringify(signUpData));
            alert("Congratulation!!! Your Account is Created You Can Log In Now");
            window.location.href="login.html";
        }else{
            alert("Account Already Exist Please Log In");
            window.location.href="login.html";
        }
    })
    

    // I check email for validation (account already exist or not)
    function checkEmails(email){
        let filtered=signUpData.filter(function(elem){
            return email===elem.email;
        })
        if(filtered.length>0){
            return false;
        }else{
            return true;
        }
    }