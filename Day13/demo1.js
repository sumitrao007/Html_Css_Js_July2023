// Splice method
// u can add a particular location or remove 
// let a=[12,45,60,78];
// console.log(a);
// a.splice(2,0,200);
// console.log(a);
// a.splice(1,0,300,800,1000);
// console.log(a);
// a.splice(5,1);
// console.log(a);
// a.splice(3,2);
// console.log(a);
// a.splice(2,1,10);
// console.log(a);


// slice
// It copy a section of data from an array & return a new array 

let str=["Core Java",'Advnced Java','Spring Boot','HTML,CSS,JS','Angular/React Js ','AWS','Docker','Jenkings','Jira'];

let temp=str.slice(1,6);
// console.log(`
//     Orginal Array ------------ 
//     ${str}
//     Copied Array-------------
//     ${temp}
// `);

let temp1=str.slice(1);
// console.log(`
    

//     Copied Array Temp1 -------------
//     ${temp1}
// `);

let temp2=str.slice();
// console.log(`
    

//     Copied Array Temp1 -------------
//     ${temp2}
// `);



// map method
// element by element operation then u go for map method 
let a=[2,3,4,5,6];
let sqrArr=a.map((myvalue)=>{
    return (myvalue*myvalue)
});

// console.log(a);
// console.log(sqrArr);

// HW  filter method.
 




