var btnSubmit =document.getElementById("btnSubmit");
if(btnSubmit != null){
    btnSubmit.onclick= function(){
        validateForm();
    }
}
function validateForm(){
    var fnameInput =document.forms["form"].elements["fname"];
    var fname = fnameInput.value;
    if(fname.length==0){
        fnameInput.nextElementSibling.innerHTML="Vui lòng nhập Họ!";
    }else{
        fnameInput.nextElementSibling.innerHTML="";
    }

    var lnameInput =document.forms["form"].elements["lname"];
    var lname = lnameInput.value;
    if(lname.length==0){
        lnameInput.nextElementSibling.innerHTML="Vui lòng nhập Tên!";
    }else {
        lnameInput.nextElementSibling.innerHTML="";
    }

    var EmailInput =document.forms["form"].elements["email"];
    var Email = EmailInput.value;
    if(Email.length==0){
        EmailInput.nextElementSibling.innerHTML="Vui lòng nhâp email!";
    }else if(Email.length<7){
        EmailInput.nextElementSibling.innerHTML="Vui lòng nhập email dài hơn 7 ký tự !";
    }else {
        EmailInput.nextElementSibling.innerHTML="";
    }
    
    var passwordInput =document.forms["form"].elements["password"];
    var password = passwordInput.value;
    if(password.length==0){
        passwordInput.nextElementSibling.innerHTML="Vui lòng nhập mật khẩu!";
    }else if(password.length<7){
        passwordInput.nextElementSibling.innerHTML="Vui lòng nhập mật khẩu dài hơn 7 ký tự!";
    }else {
        passwordInput.nextElementSibling.innerHTML="";
    }

        var repasswordInput =document.forms["form"].elements["re-password"];
    var repassword = passwordInput.value;
    if(repassword==password){
        repasswordInput.nextElementSibling.innerHTML="Mật khẩu không trùng khớp!";
    }else {
        repasswordInput.nextElementSibling.innerHTML="";
    }
    
}