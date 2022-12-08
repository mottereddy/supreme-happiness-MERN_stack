// import React, { Component } from "react";

// class Compo extends Component {
//     constructor(props) {
//         super(props);
//     }
//     render() {
//         return (
//             <>
//                 <h1>Hello This is from {this.props.name}</h1>
//             </>
//         )
//     }
// };
// export default Compo;

//---------------------------------------------------------------------------------

//function component

// function fname() {
//     const lname = "chaitu Reddy";
//     return (<h2>Hello,this is { lname}</h2>)
// };
// export default fname;

//-------------------------------------------------------------------------------------

//class component

// class Compo extends Component{
//     constructor() {
//         super();
//         this.state = {
//             lname :"chaitu reddy",
//         }
//     };
 
//     render() {
//         return (
//             <h1>Hello, i am {this.state.lname}</h1>
//         )
//     }
// }
// export default Compo;


//---------------------------------------------------------------------------------------------


//component in component

// import Compo2 from "./Compo2";

// class Compo extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             lnameobj :"chaitu",
//         }
//     }
//     render() {
//         return (
//             <>
//                 <h1>
//                     Hello,this is {this.state.lnameobj}
//                     {/* //the data is coming from the state */}
//                 </h1>
//                 <h2>I am {this.props.aname}</h2>
//                 <Compo2 address="AndhraPraedsh( = 'Component inside Component used props to send the data')"/>
//             </>
//         )
//     }
// };
// export default Compo;


//---------------------------------------------------------------------------------------------------------------------



//used setstate method

// import React, { Component } from "react";

// class Compo extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             fname: "chaitu",
//             place: "nellore",
//             sstate:"AP",
//         }
//     }
//                 stateChange = () => {
//         this.setState({ place: "banglore" })
//         this.setState({sstate:"Karnataka"})
//         }
 
//     render() {

//         return (
//             <>
//                 <h1>Hello,This is {this.state.fname}</h1>
//                 <h2>i am {this.props.age} </h2>
//                 <h2>i am from {this.state.place}</h2>
//                 <h2>state: {this.state.sstate} </h2>
//                 <button onClick={this.stateChange}>Click</button>
                
//             </>
//         )
//     }
// };
// export default Compo;


//=========================================================================================

import React, { Component } from "react";

class Compo extends Component {
    constructor() { 
        super();
        this.state = {
            fname: "chaitanya",
        };
        this.handleChange = this.handleChange.bind(this);
    };
    // handleChange = ()=> {
    //     this.setState({
    //         fname:"chaitanya reddy",
    //     })
    // }
    
    handleChange() { 
        this.setState({fname:"sai MCR"})
    };
    render() {
        console.log(this);
        return (
            <>
                <h1 onClick={this.handleChange}>{this.state.fname}</h1>
            </>
        )
    }
};
export default Compo;