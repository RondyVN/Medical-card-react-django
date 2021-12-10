import React, {useState} from 'react';

import PostService from "../API/PostService";
import PatientInfo from "../components/RightPanel/PatientInfo";
import {useHistory, useParams} from "react-router-dom";


function MainPage() {
    const params = useParams();
    const router = useHistory();
    const [patients, setPatients] = useState([])

    const updPatient = (patient) => {
        setPatients([...patient])
    }

    const deletePatient = async () => {
        await PostService.DeletePatient(params.id)
    }

    return (
        <div>
            {!params.id
                ? <div>Loading...</div>
                : <PatientInfo id={params.id} deletePatient={deletePatient}
                               updRightPanel={updPatient}
                />
            }
        </div>
    );
}

export default MainPage;