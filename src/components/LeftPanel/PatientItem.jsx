import React, {useContext} from 'react';
import {useHistory} from "react-router-dom";
import {Patients} from "../../context";


const PatientItem = (props) => {

    const router = useHistory()
    const {setPatient} = useContext(Patients)

    const pushId = () => {
        setPatient(props.patients)
        router.push(`/patient/${props.patients.id}`)
    }

    return (
        <div className="patient" onClick={pushId}>
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