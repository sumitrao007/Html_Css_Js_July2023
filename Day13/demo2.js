// JSON Object => java script object notation
// data is in Key & value format 

let obj={
    id:1.5,
    fname:"Sumit",
    "lname":"Raokhande"
}

// console.log(`
//         ID          :: ${obj.id}
//         First Name  :: ${obj.fname}
//         Last Name   :: ${obj.lname}
// `);

// array of Object 
let arr=[
    {
        id:1,
        fname:'Sumit',
        lname:"Raokhande",
        country:{
            cid:1,
            cname:'India'
        },
        month:["Jan","May","Dec"],
        result:[
            {
                subj:"M1",
                marks:40
            },
            {
                subj:"M2",
                marks:45
            },
            {
                subj:"M3",
                marks:55
            }
        ]
    },
    {
        id:2,
        fname:'Kiran',
        lname:"Raokhande",
        country:{
            cid:2,
            cname:'US'
        },
        month:["Feb","Aug","Nov"],
        result:[
            {
                subj:"M1",
                marks:45
            },
            {
                subj:"M2",
                marks:55
            },
            {
                subj:"M3",
                marks:65
            }
        ]
    },
    {
        id:3,
        fname:'Spruha',
        lname:"Raokhande",
        country:{
            cid:3,
            cname:'Japan'
        },
        month:["March","July","Oct"],
        result:[
            {
                subj:"M1",
                marks:48
            },
            {
                subj:"M2",
                marks:50
            },
            {
                subj:"M3",
                marks:65
            }
        ]
    }
];

// console.log(`
//         ID          :: ${arr[1].id}
//         First Name  :: ${arr[1].fname}
//         Last Name   :: ${arr[1].lname}
// `);

for(let i=0;i<arr.length;i++){
    console.log(`
        ID          :: ${arr[i].id}
        First Name  :: ${arr[i].fname}
        Last Name   :: ${arr[i].lname}
        Country     :: ${arr[i].country.cname}
        Month       :: ${arr[i].month.join("  ")}
        ------------- Result-------------
`);

    for(let j=0;j<arr[i].result.length;j++){
        console.log(`
            Subject :: ${arr[i].result[j].subj}
            Marks   :: ${arr[i].result[j].marks}
        `)
    }

}