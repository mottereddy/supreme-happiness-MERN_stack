
import React, { Component } from "react";

class bodycomponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // count: 0
        }
        this.handlenormal = this.handlenormal.bind(this);
    }

    handleinc = () => {
        console.log("this is inc")
    }
    handledec = () => {
        console.log("this is dec")
    }

    handlenormal() {
        console.log("normal function")
    }

    render() {
        console.log(this);
        return (
            <div>
                <h1>this is state fn</h1>
                <div>this is second div</div>
                <button onClick={this.handleinc}>inc</button>
                <button onClick={this.handledec}>dec</button>
            </div>
        )
    };
};
export default bodycomponent;


//=============================================================================================


// import React, { Component } from "react";

// class bodyfn extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             count: 1,
//         }
//     };

//     depenincinc = (data) => {
//         this.setState({ count: this.state.count + 1 })
//         // this.setState({count:this.state.count - 2})//if we give multiple also they all will execute at once
//     }
//     dependecdec = (data2) => {
//         this.setState({count:this.state.count-1})
//     }

//     render (){
//         return (
//             <>
//         <div>{ this.state.count}</div>
//         <button onClick={() => { this.depenincinc({name:"Chaitu"}) }} >incinc</button>
//         <button onClick={() => { this.dependecdec({name:"Reddy"}) }} >decdec</button>
//         </>
//     )
// }
// }
// export default bodyfn;


//======================================================================================

//program for if inc and dec



// import React, { Component } from 'react'

// export class State extends Component {
//   constructor() {
//     super();
//     this.state = {
//       count:1,
//     }
//   }

//   inc = () => { 
//     //if we write number of setstates it will take only one last statement and it will execute that one
//     this.setState({ count: this.state.count + 1 })
//     this.setState({count:this.state.count+2})
//     this.setState({count:this.state.count+3})
//     this.setState({count:this.state.count+4})

//   }
//    dec = () => { 
//     this.setState({count:this.state.count-1})
//   }

//   render() {
//     return (
//       <>
//         <div>{this.state.count}</div>
//         {/* <button onClick={this.inc}>inc</button> */}
//         <button onClick={this.dec}>dec</button>
//         <button onClick={this.inc}>inc</button>
//       </>
//     )
//   }
// }

// export default State