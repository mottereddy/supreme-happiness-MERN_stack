import React, { useState } from "react";
import './Main1.css';

export default function EditPage(props) {
    const { EmployeeId, Company, Password, Salary, Location, Email } = props.dataForEdit.data;
    const [details, setDetails] = useState({
        EmployeeId: EmployeeId,
        Company: Company,
        Password: Password,
        Salary: Salary,
        Location: Location,
        Email: Email,
    });
    const handleInputData = (e) => {
        setDetails({ ...details, [e.target.name]: e.target.value });
    };
    return (
        <div className='popup-card'>
            <div className='inputs'>
                <div className="wrong-button-edit"><button className="Wrong-btn" onClick={() => props.handleEditPopUp(false)}>&#10006;</button></div>
                EmployeeId : <input
                    type="text"
                    placeholder="Enter your EmployeeId"
                    name="EmployeeId"
                    value={details.EmployeeId}
                    onChange={handleInputData}
                    className='input-box'
                /><br />
                Company : <input
                    type="text"
                    placeholder="Enter your Company"
                    name="Company"
                    value={details.Company}
                    onChange={handleInputData}
                    className='input-box'
                /><br />
                Password : <input
                    type="text"
                    placeholder="Enter your Password"
                    name="Password"
                    value={details.Password}
                    onChange={handleInputData}
                    className='input-box'
                /><br />
                Salary : <input
                    type="text"
                    placeholder="Enter your Salary"
                    name="Salary"
                    value={details.Salary}
                    onChange={handleInputData}
                    className='input-box'
                /><br />
                Location : <input
                    type="text"
                    placeholder="Enter your Location"
                    name="Location"
                    value={details.Location}
                    onChange={handleInputData}
                    className='input-box'
                /><br />
                Email : <input
                    type="text"
                    placeholder="Enter your Email"
                    name="Email"
                    value={details.Email}
                    onChange={handleInputData}
                    className='input-box'
                /><br />
                <span className="input-buttons">
                    <button className='button-popUp'
                        onClick={() => {
                            props.handleEditDetails(details);
                            props.handleEditPopUp(false);
                        }}
                    >
                        Edit Employee details
                    </button>&nbsp;
                    <button className='button-popUp' id="btn" onClick={() => props.handleEditPopUp(false)}>Cancel</button>
                </span>
            </div>
        </div >
    );
}