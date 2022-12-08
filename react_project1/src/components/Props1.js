// import React, { Component } from "react";
// import './PropsCss.css';

// class Props1 extends Component {

//     render() {
//         return (
//             <>
//                 <label>User : </label>
//                 <input id = "eleroot" type="text" onChange={this.props.handleChangeEvent} value={this.props.data} />
//                 {this.props.children}
//             </>
//         )
//     }
// };

// export default Props1;


//=============================================================================================



// import React, { Component } from "react";

// class Props1 extends Component {
//     constructor() {
//         super();
//         this.state = {
//             data :"",
//         }
//     }
//     render() {
//         return (
//             <>
//                 User : <input type = "text" />
//             </>
//         )
//     }
// }
// export default Props1;



//================================================================================

import React, { Component } from "react";

class Props1 extends Component { 
    render() { 
        return (
            <>
                User : 
                <input type = "text"/>
            </>
        )
    }
};
export default Props1;