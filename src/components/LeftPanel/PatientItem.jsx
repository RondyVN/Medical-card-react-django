import React from 'react';
import {useHistory} from "react-router-dom";


const PatientItem = ({patient}) => {

    const history = useHistory()

    return (
        <div className="patient" onClick={() => history.push(`/patient/${patient.id}`)}>
            <div className="first-last-name">
                {patient.first_name} {patient.last_name}
            </div>
            <div className="date-patient">
                <p>{patient.sex}</p>
                {patient.date_birth}
            </div>
        </div>
    );
};

export default PatientItem;