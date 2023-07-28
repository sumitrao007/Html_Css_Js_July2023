
function onSubmit(){

    let gender=document.getElementsByName("gender");
    let genderSpan=document.getElementById("gendererror");
    let maleradio=document.getElementById("maleradio").value;
    let femaleradio=document.getElementById("femaleradio").value;

    
     
  let Checkbox=document.getElementsByName("Checkbox");

  let technoSpan=document.getElementById("technoSpan");
    let cnt=0;
    console.log(maleradio);
    console.log(femaleradio);

    let city=document.getElementById("city").value;

    if(gender[0].checked==false && gender[1].checked==false){
        // alert("Please Select Gender");
        genderSpan.innerHTML="** Please Select the Gender!!"
     }else{
       // alert("Thank You For Gender Selection!!!!");
     }

     for(let i=0;i<Checkbox.length;i++){
        if(Checkbox[i].checked==true){
            cnt++;
        }
      }
      
      console.log(cnt)
      if(cnt==0){
        // alert("Please Select at least one CheckBox!!!");
        technoSpan.innerHTML="**Please Select at least one Technology...."
     }

     
if(city==="selectcity"){
    alert("Please Select one option from drop down box!!!");
  }else{
    alert("Thank you form city Selection "+city);
  }


}