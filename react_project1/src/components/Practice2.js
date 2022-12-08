
// import React, { Component } from "react";

// function Practice2(props) {
//     return (
//         <>
//             <button onClick={props.greetHandler}> click</button>
//         </>
//     )
// }
// export default Practice2;


import React, { Component } from "react";

class Practice2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nname: "chaitu",
        }
    }

    render() {
        //if we update the state inside the render method means it will call continoulsy

        // this.setState({
        //     nname: "sai"
        // })
        // console.log(this.state.nname)
        return (
            <>
                <div>{this.state.nname}</div>
            </>
        )
    }
}

export default Practice2;