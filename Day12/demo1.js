// anonymous function
// function does not have any name 
// it execute there itself 

let temp1=function (){
    console.log("anonymous function called ...")
}

// temp1();

   let temp2= function (a,b){
        return (a+b);
    }
    let res=temp2(10,2);
    // console.log("Result is "+ res)

// fat Arrow function / Arrow Function 
// It is advanced version of Anonymous function 
// it execute there itself 
   let temp3= ()=>{
        console.log("Fat arrow function is called ")
    }

    // temp3();

    let temp4=(a,b)=>{
        return (a+b)
    }

        // temp4(10,5);
        console.log(`
            Result is  ${temp4(10,5)}
        `)

        
