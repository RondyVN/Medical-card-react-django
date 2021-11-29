import React from 'react';

const PatientItem = (props) => {

    const getId = () => {
        props.setId(props.patients.id)
    }
    return (
        <div className={props.id === props.patients.id ? "patient choose-patient" : "patient" } onClick={getId}>
            <div className="first-last-name">
                {props.patients.first_name} {props.patients.last_name}
            </div>
            <div className="date-patient">
                <p>{props.patients.sex}</p>
                {props.patients.date_birth}
            </div>
        </div>
    );
};

export default PatientItem;