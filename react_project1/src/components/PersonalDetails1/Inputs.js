import React, { useState } from 'react'

export default function Inputs(props) {
    const [data, setData] = useState({
        EmployeeId: '',
        Company: '',
        Password: '',
        Salary: '',
        Location: '',
        Email: '',
        Actions: '',
    })
    const handleInput = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
        // console.log(data)
    }

    return (
        <div className='popup-card' >
            <div className='inputs'>
                EmployeeId : <input type="text" name='EmployeeId' placeholder='EmployeeId' onChange={handleInput} className='input-box' /><br />
                Company : <input type="text" name='Company' placeholder='Company' onChange={handleInput} className='input-box' /><br />
                Password : <input type="text" name='Password' placeholder='Password' onChange={handleInput} className='input-box' /><br />
                Salary : <input type="text" name='Salary' placeholder='Salary' onChange={handleInput} className='input-box' /><br />
                Location : <input type="text" name='Location' placeholder='Location' onChange={handleInput} className='input-box' /><br />
                Email : <input type="text" name='Email' placeholder='Email' onChange={handleInput} className='input-box' /><br />

                <span>
                    <button className='button-popUp' onClick={() => {
                        props.handleData(data)
                        props.handlePopUp(false)
                    }}>Add</button>&nbsp;
                    <button className='button-popUp' onClick={() => props.handlePopUp(false)} id="btn">cancel</button>
                </span>
            </div>
        </div >
    )
}

