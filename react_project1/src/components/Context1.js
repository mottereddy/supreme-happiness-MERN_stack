// import React, { Component, createContext } from "react";
// import Context2 from './Context2';

// export const MyContext = createContext();

// export default class Context1 extends Component {
//     render() {
//         console.log("Context1")
//         return (
//             <>
//                 <MyContext.Provider value='chaitu'>
//                     <Context2 />
//                 </MyContext.Provider>
//             </>
//         )
//     }
// }

// =========================================================================================


import React, { Component, createContext } from "react";
import Context2 from './Context2';

export const MyContext = createContext();

export default class Context1 extends Component {
    constructor() {
        super();
        this.state = {
            data: 0,
        }
    }
    render() {
        console.log("Context1")
        return (
            <>
                <button onClick={() => this.setState({ data: this.state.data + 1 })}>inc</button>
                <button onClick={() => this.setState({ data: this.state.data - 1 })}>dec</button>

                <MyContext.Provider value={this.state.data}>
                    <Context2 />
                </MyContext.Provider>
            </>
        )
    }
}