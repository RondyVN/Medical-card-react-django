import React from 'react';

const PatientItem = (props) => {
    return (
        <div className="patient">
            <div className="first-last-name">
                {props.patients.last_name}, {props.patients.first_name}
            </div>
            <div className="date-patient">
                {props.patients.date_birth}
            </div>
        </div>
    );
};

export default PatientItem;