import React from 'react';
import PatientItem from "./PatientItem";


const PatientList = ({patients}) => {
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
                <PatientItem key={e.id} patient={e}/>
            )}
        </div>
    );
};

export default PatientList;