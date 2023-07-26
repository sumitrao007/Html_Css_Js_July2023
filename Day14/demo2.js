
function onAddition(){
    let input1=document.getElementById("num1");
    let input2=document.getElementById("num2");
    // console.log("Input 1 "+input1.value);
    // console.log("Input 2 "+input2.value);
    let temp1=input1.value;
    let temp2=input2.value;
    let n1=parseInt(temp1);
    let n2=parseInt(temp2);

    let res=n1+n2;

    // console.log(res);

    let divtag=document.getElementById("mydiv");

    // let message="Addition is "+res;

    let message="<h1> Addition is"+res+" </h1>"

    divtag.innerHTML=message;


}