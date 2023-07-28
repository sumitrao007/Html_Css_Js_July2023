function validation(){
    let username=document.getElementById("username").value;
    let errorMesg_Username=document.getElementById("username_error");
    let password=document.getElementById("password").value;

    let confirmpassword=document.getElementById("confirmpassword").value;

    let mobileno=document.getElementById("mobileno").value;

  let emailid=document.getElementById("emailid").value;

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
      }else if(mobileno.trim()===""){
        document.getElementById("mobilenopan").innerHTML="** mobile no not a blank";
        return false;
      }else if(mobileno.length <=9 || mobileno.length>=14 ){
        document.getElementById("mobilenopan").innerHTML="** Mobile  no should be mimimum 10 digits & max 14 digit ";
        return false;
      }else if(isNaN(mobileno)){
        document.getElementById("mobilenopan").innerHTML="** Please Enter the Valid mobile Number";
        return false;
      }else if(emailid.trim()===""){
        document.getElementById("emailspan").innerHTML="** Email Id should not blank!!!";
        return false;
      }else if(emailid.startsWith("@",0)){ 
        
        document.getElementById("emailspan").innerHTML="** Enter the valid Email ID!!!";
        return false;
      }else if(emailid.charAt(emailid.length-4)!="."){
        document.getElementById("emailspan").innerHTML="** Please Enter the Appropriate Email ID!!!";
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