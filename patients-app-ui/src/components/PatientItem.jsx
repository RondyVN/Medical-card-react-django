import React from 'react';

const PatientItem = (props) => {

    const getId = () => {
        props.setId(props.patients.id)
    }
    return (
        <div className="patient" onClick={getId}>
            <div className="first-last-name">
                {props.patients.last_name}, {props.patients.first_name}
            </div>
            <div className="date-patient">
                {props.patients.date_birth}
                <p>{props.patients.id}</p>
            </div>
        </div>
    );
};

export default PatientItem;