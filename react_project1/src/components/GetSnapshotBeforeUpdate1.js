// import React, { Component } from "react";

// class GetSnapshotBeforeUpdate1 extends Component {
//     constructor() {
//         super();
//         this.state = {
//             data: "chaitu",
//         }
//     };
//     componentDidMount() {
//         setTimeout(() => {
//             this.setState({ data: "sai" })
//         }, 1000);
//     }
//     getSnapshotBeforeUpdate(props, prestate) {
//         document.getElementById("before").innerHTML = prestate.data
//     }
//     componentDidUpdate() {
//         document.getElementById("after").innerHTML = this.state.data;
//     }
//     render() {
//         return (
//             <>
//                 <div id='before'></div>
//                 <div id='after'></div>
//             </>
//         )
//     }
// };
// export default GetSnapshotBeforeUpdate1;



import React, { Component } from "react";

class GetSnapshotBeforeUpdate1 extends Component {
    constructor() {
        super();
        this.state = {
            nname: "chaitanya",
        }
    };
    componentDidMount() {
        setTimeout(() => {
            this.setState({ nname: "reddy" })
        }, 1000)
    }
    getSnapshotBeforeUpdate(preprosp, prestate) {
        document.getElementById("first").innerHTML = prestate.nname
    }
    componentDidUpdate() {
        document.getElementById("second").innerHTML = this.state.nname
    }
    render() {
        return (
            <>
                <div id="first"></div>
                <div id="second"></div>

            </>
        )
    }
};
export default GetSnapshotBeforeUpdate1;


