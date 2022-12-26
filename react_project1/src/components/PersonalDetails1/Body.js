
import React from 'react'

export default function Body(props) {
    const EmpInfo = props.employeeInfo.filter((item) =>
        item.EmployeeId !== "" &&
        item.Company !== "" &&
        item.Password !== "" &&
        item.Salary !== "" &&
        item.Location !== "" &&
        item.Email !== "")
    // console.log(EmpInfo);
    return (
        <div className='table-body'>
            <h1 className='table-body-title'>Employee-Info</h1>
            <table className='table-box'>
                <thead className='table-heading'>
                    <th>S.NO</th>
                    <th>EmployeId</th>
                    <th>company</th>
                    <th>Password</th>
                    <th>Salary</th>
                    <th>Location</th>
                    <th>Email</th>
                    <th>Actions</th>
                </thead>
                {EmpInfo.map((item, index) => (
                    <tr className='table-data'>
                        <td>{index + 1}</td>
                        <td>{item.EmployeeId}</td>
                        <td>{item.Company}</td>
                        <td>{item.Password}</td>
                        <td>{item.Salary}</td>
                        <td>{item.Location}</td>
                        <td>{item.Email}</td>

                        <td><button className='buttn' onClick={() => props.editPopUp(true, item, index)}>&#9998;</button>
                            &nbsp;
                            &nbsp;
                            <button id='buttn' onClick={() => props.handledelete(item, index)}>&#10006;</button>
                        </td>
                    </tr>))}
            </table>
        </div >
    )
}