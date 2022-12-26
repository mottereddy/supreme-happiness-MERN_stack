import React from 'react'

export default function Head(props) {
    return (
        <div className='header_component'>
            <span>
                &nbsp;&nbsp;
                <span className='Heading'>
                    <span className='E-title'>E</span>
                    <span className='title'>MPLOYEE</span>&nbsp;&nbsp;
                    <span className='E-title'>D</span>
                    <span className='title'>ETAILS</span>
                </span>
            </span>
            <span>
                <button className='Add-Employee-Details' onClick={() => props.handlePopUp(true)}>
                    Add Employee Details
                </button>
            </span>
        </div>
    )
}
