// import React, { Component } from "react";
// import { MyContext } from "./Context1";

// export default class Context4 extends Component {
//     render() {
//         console.log("Context4")
//         return (
//             <>
//                 <MyContext.Consumer>{
//                     (value) => <h1>{value}</h1>
//                 }</MyContext.Consumer>
//             </>
//         )
//     }
// }



//=========================================================================

import React, { Component } from "react";
import { MyContext } from "./Context1";

export default class Context4 extends Component {
    render() {
        console.log("Context4")
        return (
            <>
                <MyContext.Consumer>{
                    (value) => <h1>{value}</h1>
                }</MyContext.Consumer>
            </>
        )
    }
}