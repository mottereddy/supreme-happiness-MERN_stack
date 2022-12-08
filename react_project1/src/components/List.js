// import React, { Component } from "react";

// class List extends Component {
//     constructor() {
//         super();
//     };
//     render() {
//         return (
//             <div>
//                 {[1, 2, 3, 4, 5].map((item, index) => (<div key={index}> {item}</div>))}
//     {/* //here we want to pass unique nature for the elements we pass the index parameters
//     //if we dont pass the parameters index then it will show some error
//     //in these way we have to pass unique nature to the elements             */}
//             </div>
//         )
//     }
// }

// export default List;



//----------------------------------------------------------------------------------------


// import { render } from "@testing-library/react";
// import React from "react";

// function LifeCycle() {
//     let names = ["chaitu", "chaitanya", "sai", "vedansh"];
   
//     return (
//         <>
//             <div>
//                 {
//                     names.map((param) =>  <h1>{param}</h1> )
//                 }
//             </div>
//         </>
//         )

//     };

// export default LifeCycle;



//--------------------------------------------------------------------------------------------


// import { render } from "@testing-library/react";
// import React from "react";

// function LifeCycle() {
//     let names = ["chaitu", "chaitanya", "sai", "vedansh"];
   
//     let NameList = names.map((param) => <h1>{param}</h1>)
//     return (
//         <>
//             <div>{NameList}</div>
//         </>
//         )

//     };

// export default LifeCycle;



//--------------------------------------------------------------------------------------------------


// import React from "react";

// function List() {
//     const ele = [
//         {
//             id: 1,
//             name: "chaitu",
//             age: 25,
//             place: "nellore",
//             skill: "react"
//         },
//         {
//             id: 2,
//             name: "chaitanya",
//             age: 24,
//             place: "banglore",
//             skill: "vue"
//         },
//         {
//             id: 3,
//             name: "sai",
//             age: 23,
//             place: "chennai",
//             skill: "nodejs"
//         },
//         {
//             id: 4,
//             name: "vedansh",
//             age: 5,
//             place: "delhi",
//             skill: "java"
//         },
//         {
//             id: 6,
//             name: "lakshman",
//             age: 28,
//             place: "mumbai",
//             skill: "pythion"
//         }
          
//     ];
//     const data = ele.map((param) => <h2>My Id is{param.id} {param.name} {param.age} {param.skill} </h2>)
//     return (
//         <>
//            <div>{data}</div>
//         </>
//     )
// };
// export default List;



//------------------------------------------------------------------------------------------------



import React from "react";
import List1 from "./List1";

function List() { 
    const ele = [
        {
            id: 1,
            name: "chaitu",
            age: 25,
            place: "nellore",
            skill: "react"
        },
        {
            id: 2,
            name: "chaitanya",
            age: 24,
            place: "banglore",
            skill: "vue"
        },
        {
            id: 3,
            name: "sai",
            age: 23,
            place: "chennai",
            skill: "nodejs"
        },
        {
            id: 4,
            name: "vedansh",
            age: 5,
            place: "delhi",
            skill: "java"
        },
        {
            id: 6,
            name: "lakshman",
            age: 28,
            place: "mumbai",
            skill: "pythion"
        }
          
    ];
    const data = ele.map((param) => <List1 person={param} />)
    return (
        <>
           <div>{data}</div>
        </>   
    )
};
export default List; 