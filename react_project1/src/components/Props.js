import React from "react";
// import Props1 from "./Props1";
// import Props2 from "./Props2";
// import PropsCss from "./PropsCss.css";

const prop = (props) => {
    console.log(props);
    return (
        <h1>hello {props.fname}</h1>
    )
}
export default prop;

// //--------------------------------------------------------------------------------------------

// //here props is a parent of props1 and the props1 is child component
// //props is parent component
// //props1 is child component


// //in these program we are getting the data from the cild to parent with the call back function

// class Props extends Component {
//     constructor() {
//         super();
//         this.state = {
//         data:"",
//         }
//     };
//     handleChangeEvent = (e) => {
//         console.log("this is call back from parent",e.target.value);
//         this.setState({
//             data:e.target.value,
//         })
//     };

//     //here if we pass the parameters then we will get one syntetic base events in that syntetic base
//     //events we will get the target in that target we will see the events
//     //thus why we wrote e.target.value

//     render() {
//         return (
//             <>
//                 <Props1 handleChangeEvent={this.handleChangeEvent} data={this.state.data} />
//             </>
//         )
//     }
// };
// export default Props;


//-------------------------------------------------------------------------------------------------


// class Props extends Component {
//     constructor() {
//         super();
//         this.state = {
//         data:"",
//         }
//     };
//     handleChangeEvent = (e) => {
//         // console.log("this is call back from parent",e.target.value);
//         this.setState({
//             data:e.target.value,
//         })
//     };

//     //here if we pass the parameters then we will get one syntetic base events in that syntetic base
//     //events we will get the target in that target we will see the events
//     //thus why we wrote e.target.value

//     render() {
//         return (
//             <>
//                 <Props1 handleChangeEvent={this.handleChangeEvent} data={this.state.data} />
//                 <Props2 handleChangeEvent={this.handleChangeEvent} data={this.state.data} />
//             </>
//         )
//     }
// };
// export default Props;





//-----------------------------------------------------------------------------------------------

// class Props extends Component {
//     constructor() {
//         super();
//         this.state = {
//             data:""
//         }
//     }
//     render() {
//         return (
//             <>
//             <Props1>
//                 <label>Login</label>
//                 <input type="text"></input>
//                 <button>Login</button>
//             </Props1>
//              <Props1>
//                 <label>Register</label>
//                 <input type="text"></input>
//                 <input type="password"></input>
//                 <button>Register</button>
//                 </Props1>
//                 </>
//         )
//     }
// }
// export default Props;



//============practice=============================================//


// import React, { Component } from "react";
// import Props1 from "./Props1";

// class Props extends Component {
//     constructor() {
//         super();
//         this.state = {
//             data: "",
//         }
//     }

//     handleChange = (e) => {
//         console.log(e);
//     }

//     render() {
//         return (
//             <>
//                 <Props1 />
//             </>
//         )
//     }
// }
// export default Props;