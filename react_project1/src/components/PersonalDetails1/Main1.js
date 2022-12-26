import React, { useState } from 'react'
import Head from './Head';
import Body from "./Body"
import Inputs from './Inputs';
import EditPage from './EditPage'
import './Main1.css';

export default function Main1() {
    const [popUp, setPopUp] = useState(false)
    const [info, setInfo] = useState([])
    const [editPopUp, setEditPopUp] = useState(false);
    const [dataForEdit, setDataForEdit] = useState();

    const handledelete = (element, index) => {
        // console.log(element, index, "parent");
        setInfo(info.filter((item) => item !== element))
    }
    // console.log(info);
    console.log(dataForEdit)
    return (
        <div className='body'>
            <div className='Main-frame'>
                <Head handlePopUp={(status) => setPopUp(status)} />

                {popUp ? <Inputs
                    handleData={(data) => setInfo([...info, data])}
                    handlePopUp={(status) => setPopUp(status)}
                /> : null
                }

                <Body
                    employeeInfo={info}
                    editPopUp={(a, item, i) => {
                        setEditPopUp(a);
                        setDataForEdit({ data: item, index: i });
                        alert("are you sure you want to edit")
                    }}
                    handledelete={(element, index) => { handledelete(element, index); alert('are you sure you want to delete') }}
                />

                {editPopUp ? (
                    <EditPage
                        handleEditPopUp={(s) => setEditPopUp(s)}
                        handleEditDetails={(s) => {
                            info.map((item, index) => {
                                if (index === dataForEdit.index) {
                                    info[index] = s;
                                }
                                return null;
                            });
                        }}
                        dataForEdit={dataForEdit}
                    />
                ) : null}

            </div>
        </div>
    )
}
