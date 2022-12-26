// import React, { Component } from "react";
// import Practice2 from './Practice2';

// class Practice1 extends Component {

//     render() {
//         return (
//             <>
//                 <div><Practice2 sname="vedansh" /></div>
//             </>
//         )
//     }
// };
// export default Practice1;


// import React, { Component } from "react";
// import Practice2 from './Practice2';

// class Practice1 extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             fname: "chaitu",
//         }
//         // this.changeHanlder = this.changeHanlder.bind(this);
//     }
//     changeHanlder = () => {
//         alert(`hello ${this.state.fname}`)
//     }
//     render() {
//         return (
//             <>
//                 <Practice2 greetHandler={this.changeHanlder} />
//             </>
//         )
//     }

// };

// export default Practice1;


// import React, { Component } from "react";
// import Practice2 from "./Practice2";

// class Practice1 extends Component {
//     constructor() {
//         super();
//         this.state = {
//             fname: "chaitanya"
//         }
//     }
//     changeHanlder = () => {
//         alert(`hello ${this.state.fname}`)
//     }
//     render() {
//         return (
//             <>
//                 <Practice2 greetHandler={this.changeHanlder} />
//             </>
//         )
//     }
// };
// export default Practice1;






// import React, { useState } from "react";

// export default function Practice1() {
//     const [data, setData] = useState([])
//     const [saveData, setSaveData] = useState([])

//     const functionCall = () => {
//         setSaveData([data, ...saveData])
//     }
//     // const output = ([])
//     console.log(saveData)
//     return (
//         <>
//             <div>
//                 <input type='text' onChange={(e) => { setData(e.target.value) }} />
//                 <button onClick={functionCall}>ADD</button>
//                 <div>
//                     <h1>displayed data</h1>
//                     <table>
//                         <tr><th>Data</th></tr>
//                         <tr>{saveData.map((item) => { <p>{item}</p> })}</tr>
//                     </table>
//                 </div>
//             </div>
//         </>
//     )
// }





