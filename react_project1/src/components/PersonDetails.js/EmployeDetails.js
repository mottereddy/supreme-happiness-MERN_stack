import React, { useState, useEffect } from "react";
import './EmployeDetails.css';

export default function Employee() {
    const [EmployeeId, setEmployeeId] = useState('')
    const [Salary, setSalary] = useState('')
    const [Company, setCompany] = useState('')
    const [Location, setLocation] = useState('');
    const [Email, setEmail] = useState('');

    const [EmployeeInput, setEmployeeInput] = useState('')
    const [SalaryInput, setSalaryInput] = useState('')
    const [CompanyInput, setCompanyInput] = useState('');
    const [EmailInput, setEmailInput] = useState('')
    const [LocationInput, setLocationInput] = useState('');

    const handleEmployeeId = (data) => {
        setEmployeeId(data.target.value)
    }

    const handleSalary = (data) => {
        setSalary(data.target.value)
    }
    const handleCompany = (data) => {
        setCompany(data.target.value)
    }
    const handleLocation = (data) => {
        setLocation(data.target.value)
    }
    const handleEmail = (data) => {
        setEmail(data.target.value)
    }

    function assignData(e) {
        e.preventDefault(); //this preventdefault will helpl us in preventing some default actions
        setEmployeeInput([...EmployeeInput, <p>{EmployeeId}</p>])
        setSalaryInput([...SalaryInput, <p>{Salary}</p>])
        setCompanyInput([...CompanyInput, <p>{Company}</p>])
        setEmailInput([...EmailInput, <p>{Email}</p>])
        setLocationInput([...LocationInput, <p>{Location}</p>])
    };

    return (
        <div>
            <div className="Main-UI">
                <form className="input-details">
                    <input type='text' placeholder="EmployeeId" onChange={handleEmployeeId} />
                    <input type='text' placeholder="Salary" onChange={handleSalary} />
                    <input type='text' placeholder="Company" onChange={handleCompany} />
                    <input type='text' placeholder="Location" onChange={handleLocation} />
                    <input type='text' placeholder="Email" onChange={handleEmail} />

                    <input type='button' value='ADD' onClick={assignData} />
                    {/* <button onClick={assignData}>submit</button> */}
                </form>
            </div >
            <br /> <br />
            <div className="main-container">
                <div className="container">
                    <div className="display-data">
                        <span className="Employee-table">
                            <h1>EmployeeID</h1>
                            <div className="table-inside-border">
                                {EmployeeInput}
                            </div>
                        </span>

                        <span className="Salary-table">
                            <h1>Salary</h1>
                            <div className="table-inside-border">
                                {SalaryInput}
                            </div>
                        </span>

                        <span>
                            <h1>Company</h1>
                            <div className="table-inside-border">
                                {CompanyInput}
                            </div>
                        </span>

                        <span>
                            <h1>Email</h1>
                            <div className="table-inside-border">
                                {EmailInput}
                            </div>
                        </span>

                        <span>
                            <h1>Location</h1>
                            <div className="table-inside-border">
                                <input type='text' />
                            </div>
                        </span>

                        <span>
                            <h1>Action</h1>
                            <div className="action-table">
                                <button>Edit</button>
                                <button>Delete</button>
                            </div>
                        </span>

                    </div >
                </div>
            </div></div>
    )
}









// import React, { useState } from "react";
// import Body from "./Body";
// import Header from "./Header";
// import PopUp from "./PopUp";
// import "./PersonDetails.css";

// export default function PersonDetails() {
//     const [popUp, setPopUp] = useState(false);
//     const [details, setDetails] = useState([
//         { firstName: "", lastName: "", email: "", phNo: "", address: "" },
//     ]);
//     console.log(details);
//     return (
//         <>
//             <Header handlePopUpState={(s) => setPopUp(s)} />
//             <Body details={details} />
//             {popUp ? (
//                 <PopUp
//                     handlePopUpState={(s) => setPopUp(s)}
//                     handleAddDetails={(data) => setDetails([...details, data])}
//                 />
//             ) : null}
//         </>
//     );
// }


// import React from "react";
// import "./Header.css";

// export default function Header(props) {
//     return (
//         <header id="employee_details_header">
//             <h1>&#9626;&#9624;Employee Details</h1>
//             <div id="header_search_div">
//                 <input
//                     type="search"
//                     placeholder="Search details by Registered name or Id"
//                 />
//                 <button>Search</button>
//             </div>
//             <button onClick={() => props.handlePopUpState(true)}>
//                 &#10010; Add Employee Details
//             </button>
//         </header>
//     );
// };









// import React from "react";
// import "./Body.css";

// export default function Body(props) {
//     const employeeDetails = props.details.filter(
//         (item) =>
//             item.firstName !== "" &&
//             item.lastName !== "" &&
//             item.email !== "" &&
//             item.phNo !== "" &&
//             item.address !== ""
//     );
//     console.log(employeeDetails);
//     return (
//         <div id="employee_details_div">
//             <h1>Details</h1>
//             <table id="table_employee_data" border="2">
//                 <tr>
//                     <th>Employee ID</th>
//                     <th>First Name</th>
//                     <th>Last Name</th>
//                     <th>E-Mail</th>
//                     <th>Mobile Number</th>
//                     <th>Address</th>
//                 </tr>
//                 {employeeDetails.map((item, index) => (
//                     <tr>
//                         <td>{index + 1}</td>
//                         <td>{item.firstName}</td>
//                         <td>{item.lastName}</td>
//                         <td>{item.email}</td>
//                         <td>{item.phNo}</td>
//                         <td>{item.address}</td>
//                     </tr>
//                 ))}
//             </table>
//         </div>
//     );
// }






// import React, { useState } from "react";
// import "./PopUp.css";

// export default function PopUp(props) {
//     const [details, setDetails] = useState({
//         firstName: "",
//         lastName: "",
//         email: "",
//         phNo: "",
//         address: "",
//     });
//     const handleInputData = (e) => {
//         setDetails({ ...details, [e.target.name]: e.target.value });
//     };

//     return (
//         <div id="popup_bg">
//             <div id="popup_card">
//                 <button onClick={() => props.handlePopUpState(false)}>&#10006;</button>
//                 <span className="popup_name_input">
//                     <input
//                         type="text"
//                         placeholder="Enter your First Name"
//                         name="firstName"
//                         onChange={handleInputData}
//                     />
//                     <input
//                         type="text"
//                         placeholder="Enter your Last Name"
//                         name="lastName"
//                         onChange={handleInputData}
//                     />
//                 </span>
//                 <input
//                     type="email"
//                     placeholder="Enter your Email ID"
//                     name="email"
//                     onChange={handleInputData}
//                 />
//                 <input
//                     type="number"
//                     placeholder="Enter your mobile number"
//                     name="phNo"
//                     onChange={handleInputData}
//                 />
//                 <input
//                     type="text"
//                     placeholder="Enter your Address"
//                     name="address"
//                     onChange={handleInputData}
//                 />
//                 <span className="popup_btn_for">
//                     <button
//                         onClick={() => {
//                             props.handleAddDetails(details);
//                             props.handlePopUpState(false);
//                         }}
//                     >
//                         Add Employee details
//                     </button>
//                     <button onClick={() => props.handlePopUpState(false)}>Cancel</button>
//                 </span>
//             </div>
//         </div>
//     );
// }







// import React, { useState } from "react";
// import './EmpCard.css';
// import PopupCard from "./PopupCard";

// function EmpCard() {
//     const [input, setInput] = useState('');
//     const [data, setData] = useState([]);
//     const [edit, setEdit] = useState(false);
//     const [del, setDel] = useState(false);

//     const storeInputFields = (e) => {
//         setInput(prevVal => { return { ...prevVal, [e.target.name]: e.target.value } })
//         //console.log(input);
//     }
//     const handleInputs = () => {
//         setData(prevVal => [...prevVal, input]);
//         setInput({ FullName: '', EmpId: '', Salary: '', Contact: '', Email: '' });
//     }
//     // console.log(data);
//     const handleEditChanges = () => {
//         setEdit(<PopupCard />)
//         console.log(edit);
//     }
//     return (
//         <div id="main_div">
//             <div id="header_div">Employee Details</div>
//             <div id="input_div">
//                 <input className="input_fields" value={input.FullName} type='text' name="FullName" placeholder='Enter Full Name' onChange={storeInputFields} />
//                 <input className="input_fields" value={input.EmpId} type='text' name="EmpId" placeholder='Emp Id' onChange={storeInputFields} />
//                 <input className="input_fields" value={input.Salary} type='number' name="Salary" placeholder='Salary' onChange={storeInputFields} />
//                 <input className="input_fields" value={input.Contact} type='text' name="Contact" placeholder='Contact No' onChange={storeInputFields} />
//                 <input className="input_fields" value={input.Email} type='email' name="Email" placeholder='Email' onChange={storeInputFields} />
//                 <button onClick={handleInputs}>Add</button>
//             </div>
//             <div>
//                 <table border={1}>
//                     <tr>
//                         <th>FullName</th>
//                         <th>EmpId</th>
//                         <th>Salary</th>
//                         <th>Contact</th>
//                         <th>Email</th>
//                         <th>Action</th>
//                     </tr>
//                     {
//                         data.map((obj) => (<tr>
//                             <td>{obj.FullName}</td>
//                             <td>{obj.EmpId}</td>
//                             <td>{obj.Salary}</td>
//                             <td>{obj.Contact}</td>
//                             <td>{obj.Email}</td>
//                             <td><button id="editBtn" onClick={() => setEdit(true)}>Edit</button>
//                                 <button id="delBtn">Del</button></td>
//                         </tr>))
//                     }
//                 </table>
//             </div>
//             {edit ? <PopupCard /> : null}
//         </div>
//     )
// }

// export default EmpCard






