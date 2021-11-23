import React from 'react';
import PatientItem from "./PatientItem";
import MyButton from "./UI/button/MyButton";
import Input from "./UI/myinput/Input";

const PatientList = ({setId, patients}) => {
    if (!patients.length) {
        return (
            <div>
                <h1 style={{textAlign: 'center'}}>
                    Posts not found!
                </h1>
            </div>
        )
    }

    return (
        <div>
            {patients.map(e =>
                <PatientItem setId={setId} key={e.id} patients={e}/>
            )}
        </div>
    );
};

export default PatientList;