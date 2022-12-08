// import React, { Component } from "react";
// import './Test.css';

// class Test extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             data: [],
//         };
//     }

//     componentDidMount() {
//         fetch("https://jsonplaceholder.typicode.com/comments")
//             .then((res) => res.json())
//             .then((result) => this.setState({ data: result }))
//             .catch((err) => console.log(err));
//     }

//     render() {
//         console.log(this.state)
//         return (
//             <div>
//                 {this.state.data.map((item) => (
//                     <div>
//                         <table>
//                             <tr>
//                                 <th>
//                                     <h3>postId = {item.postId}</h3>
//                                 </th>
//                             </tr>
//                             <tr>
//                                 <th>
//                                     <h3>id = {item.id}</h3>
//                                 </th>
//                             </tr>
//                             <tr>
//                                 <th>
//                                     <h4>name = {item.name}</h4>
//                                 </th>
//                             </tr>
//                             <tr>
//                                 <th>
//                                     <h4>email = {item.email}</h4>
//                                 </th>
//                             </tr>
//                             <tr>
//                                 <th>
//                                     <h4>body = {item.body}</h4>
//                                 </th>
//                             </tr>
//                         </table>


//                     </div>
//                 ))}
//             </div>
//         );
//     }
// }
// export default Test;



// import React, { Component } from "react";
// import "./Test.css";

// export default class Test extends Component {
//     render() {
//         // const { header, body } = this.props;
//         const { header } = this.props;
//         const { body } = this.props
//         console.log(body[0]);
//         return (
//             <table id="customers">
//                 <thead>
//                     <tr>
//                         {header.map((item, index) => (
//                             <th key={index}>
//                                 {item}
//                             </th>
//                         ))}
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {body.map((obj, index) => (
//                         <tr key={index}>
//                             {header.map((item, index) => (
//                                 <td key={index}>{item === "url" || item === "thumbnailUrl" ?
//                                     <img src={obj[item]} style={{ height: "50px", width: "300px" }} /> :
//                                     obj[item]}</td>
//                             ))}
//                         </tr>
//                     ))}</tbody>
//             </table>
//         );
//     }
// };


import React, { Component } from "react";

class Test extends Component {
    constructor() {
        super();
        this.state = {
            header: [],
            body: [],
        }
    }
    handleComment = () => {
        fetch("https://jsonplaceholder.typicode.com/comments")
            .then((res) => { res.json() })
            .then((result) => { console.log(result) })
            .catch((error) => { 'error message' })
    };
    handleimage = () => {
        fetch("https://jsonplaceholder.typicode.com/photos")
            .then((res) => { res.json() })
            .then((result) => { console.log(result) })
    }

    render() {
        return (
            <>
                <button onClick={this.handleComment}>
                    comment
                </button>
                <button onClick={this.handleimage}>
                    photos
                </button>
            </>
        )
    }
}
export default Test;