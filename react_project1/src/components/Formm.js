import React, { Component } from 'react'

class Formm extends Component {
    constructor() {
        super();
        this.state = {
            formData: {},
        };
    }

//to take value from the event
//here if we pass only the parameters (userParam) then we will get one syntetic base event
//in that syntetic base event we will see the target in that target we will see the event
//thus why we passed (userParam.target.value) in the statements
    
    // handlechangedata = (userParam) => {
    //     this.setState ({
    //         formData :userParam.target.value
    //     })
    //     console.log(userParam.target.value)

    // }

    handlechangedata = (passParam) => {
        // console.log(passParam.target.id,passParam.target.value);
        this.setState({
            formData: { ...this.state.formData, [passParam.target.id]: passParam.target.value },
        });
    };

    handleSubmit = () => {
        console.log(this.state);
    };
  render() {
      return (
          <div>
              <label>UserName : </label>
              <input type="text" id="user" onChange={this.handlechangedata} />
              <label>Password : </label>
              <input type="password" id="pass" onChange={this.handlechangedata}  />
              <button onClick={this.handleSubmit}>Submit</button>
          </div>
      );
  }
}

export default Formm;




// import React from "react";

// class Formm extends Component { 
//     constructor() {
//         super();
//         this.state = {
//             data: "",
//         }
//     };
//     render() { 
//         return (
//             <>
//                 <div></div>
//             </>
//         )
//     }

// }
// export default Formm;