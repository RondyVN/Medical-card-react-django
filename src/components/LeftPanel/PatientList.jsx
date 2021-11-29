import React from 'react';
import PatientItem from "./PatientItem";


const PatientList = ({setId, patients, id}) => {
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
                <PatientItem setId={setId} key={e.id} id={id} patients={e}/>
            )}
        </div>
    );
};

export default PatientList;