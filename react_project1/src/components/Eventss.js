import React, { Component } from "react";
import Header from "./Header";


//componentdidmount and componentunmount

class Eventss extends Component { 
    constructor() { 
        super();
        this.state = {
            nname:false,
        };
    };
    handlechangeComponent = () => {
        this.setState({ nname: !this.state.nname })
    };

    render() { 
        return (
            <>
            <div>Hello...</div>
                {this.state.nname && <Header />}
                <button onClick={this.handlechangeComponent}>click</button>
            </>
        )
    }
}

export default Eventss;



//---------------------------------------------------------------------------------------------

//import React, { Component } from "react";
    
// class Eventss extends Component {
//     constructor() {
//         super();
//         this.state = {
//             userlogin: false,
//         }
//     };
//     clickedFunction = () => {
//         this.setState({userlogin:!this.state.userlogin})
//     }
   
//     render() {
//         console.log(this.state.userlogin);
//     return (
//         <>
//             {this.state.userlogin ? (
//                 <div>
//                     <h2>userlogOutSuccesful</h2>
//                     <button onClick={this.clickedFunction}>Login</button>
//                     <hr/>
//                     <button>Register</button>
//                 </div>
//             ) : (   <div>
//                     <h2>userloginSuccesful</h2>
//                     <h3>Hello Welcome...</h3>
//                     <button onClick={this.clickedFunction}>Logout</button>
//                     </div>
//             )}
//         </>
//     )
//     }
// };

// export default Eventss;


//---------------------------------------------------------------------------------------------------------------

// import React, { Component } from "react";

// class Eventss extends Component {
//     constructor() {
//         super();
//         this.state = {
//             data: false,
//             register: false,
//         }
//     };
//     userloginfn = () => {
//         this.setState({data : !this.state.data})
//     }
//     userRegister = () => {
//         this.setState({register : !this.state.register})
//     }
//     render() {
//         console.log(this.state.data)
//         return (
//             <>

//                 {this.state.data ? (
//                     <button onClick={this.userloginfn}>Login</button>
//                 ) : (
//                     <button onClick={this.userloginfn}>Logout</button>
//                 )}
//                 <div>this is chaitu</div>
//                {this.state.data ? (
//                     <button onClick={this.userloginfn}>Login</button>
//                 ) : (
//                     <button onClick={this.userloginfn}>Logout</button>
//                 )}
                
//             </>
//         )
//     };
// };
// export default Eventss;



//------------------------------------------------------------------------------------------------------------------



// import React, { Component } from "react";

// class Eventss extends Component {
//     constructor() {
//         super();
//         this.state = {
//             nname:"chaitu",
//         }
//     };
//     clickedFunction = () => { 
//         console.log(this.setState({nname:"sai"}))
//     }
 
//     render() { 
//         return (
//             <>
//                 <div>hello....{this.state.nname}</div>
                
//                 <button onClick={this.clickedFunction}>ComponentFn</button>
//             </>
//         )
//     }
// };

// export default Eventss;