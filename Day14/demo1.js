function onAlert(){
    console.log("on Alert is called");
    alert("On Alert Is called");
}

function onPrompt(){
    let res=prompt('Enter the Name')
    console.log(res);

        if(res===null){
            alert("U r the Guest")
        }else{
            alert("Welcome to "+res)
        }

    // alert(res);
}

function onConfirm(){
    let res=confirm("Do u want to Delete This Record??");

        if(res){
            alert("Record is deleted Successfully")
        }else{
            alert("Record Not deleted Successfully")
        }

}