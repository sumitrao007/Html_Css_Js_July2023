function validation(){
    let username=document.getElementById("username").value;
    let errorMesg_Username=document.getElementById("username_error");
    let password=document.getElementById("password").value;

    let confirmpassword=document.getElementById("confirmpassword").value;

    // console.log(username);

    if(username.trim()==''){
    //    alert("Please enter the appropriate username");
       errorMesg_Username.innerHTML="**Please enter the appropriate username";
        return false;
    }else if(!isNaN(username)){
        // alert("Enter valid username");
        document.getElementById("username_error").innerHTML="** Please Enter the Valid User Name!!!";
         return false;
     }else if(username.length<=3 || username.length>=6){
        document.getElementById("username_error").innerHTML="** Please Enter user name 3 char & max 6 char";
        return false;
     }else if(password.trim()===""){
        document.getElementById("passwordspan").innerHTML="** Password Should not be blank!!!";
        return false;
      }else if(confirmpassword.trim()===""){
        document.getElementById("confirmpassspan").innerHTML="** Confirm password should not blank";
        return false;
      }else if(confirmpassword!=password){
        document.getElementById("confirmpassspan").innerHTML="** Confirm password should match to password";
        return false;
      }
     else{
        return true;
    }
   

}


function onChange(){
    console.log("Change event occur..");
    document.getElementById("username_error").innerHTML="";
}