import React, {useContext} from 'react';
import PatientInfo from "../components/RightPanel/PatientInfo";
import {useParams} from "react-router-dom";
import {Patients} from "../context";


function MainPage() {
    const params = useParams();

    return (
        <div>
            <PatientInfo id={params.id}/>
        </div>
    );
}

export default MainPage;