import React from 'react';
import {useHistory} from "react-router-dom";

const PatientItem = (props) => {


    const router = useHistory()
    return (
        <div className={props.id === props.patients.id ? "patient choose-patient" : "patient" } onClick={() => router.push(`/patient/${props.patients.id}`)}>
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