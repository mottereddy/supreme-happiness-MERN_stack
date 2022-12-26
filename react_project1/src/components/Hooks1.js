import { useState, useEffect } from "react"
import "./HookCss.css"

export default function Hooks1() {
    const [data, setData] = useState([])
    const [details, setDetails] = useState([]);
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => setData(json));
    }, []);
    const inside = (abc) => {
        console.log(abc);
        setDetails([abc]);
    };
    const outside = () => {
        setDetails("");
    };
    return (
        <div id="Main-Ui" >
            {details.length === 0
                ? data.map((item, index) => {
                    return (
                        <div key={index}>
                            <div className="sub-Ui">
                                <img src={item.image} style={{ width: "150px", height: "150px" }} />
                                <h5>{item.title}</h5>
                                <p>${item.price}</p>
                                <button className="btn_Click" onClick={() => inside(item)}>Click</button>
                            </div>
                        </div>
                    );
                })
                : details.map((item, index) => {
                    return (
                        <div className="sub-Ui" key={index} id="image">
                            <button onClick={outside} className="btn_Click1">&#8678;</button>
                            <img className="image-Ui" src={item.image} style={{ width: "150px", height: "150px" }} />
                            <h5>{item.title}</h5>
                            <p>${item.price}</p>

                        </div>
                    );
                })}
        </div >
    );
}


//=========================================================================================

// { data.numbers }
//             < button onClick={() => setData({ numbers: data.numbers + 1 })
//             }> Inc</button >
//             <button onClick={() => setData({ numbers: data.numbers - 1 })}> Dec</button>



//--------------------------------------------------------------------------------------------


//component willUnMount

//for these example the parent is Hooks2.js

// import React, { useState, useEffect } from "react";

// export default function Hooks1() {
//     const [data, setData] = useState({ numbers: 0 });
//     useEffect(() => {
//         return () => { console.log('this component is unmount') }
//     }, []);
//     return (
//         <div>
//             {data.numbers}

//         </div >
//     )
// };




// ======================================================================================


// import React, { useState, useEffect } from "react";

// export default function Hooks1() {
//     const [data, setData] = useState({ numbers: 0 });
//     useEffect(() => {
//         fetch("https://fakestoreapi.com/products")
//             .then((res) => res.json())
//             .then((result) => { })
//     }, [data]);
//     return (
//         <div>
//             {data.numbers}
//             <button onClick={() => setData({ numbers: data.numbers + 1 })}>Inc</button>
//             <button onClick={() => setData({ numbers: data.numbers - 1 })}> Dec</button>
//         </div >
//     )
// };