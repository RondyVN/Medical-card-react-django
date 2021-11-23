import React, {useEffect, useState} from 'react';
import axios from "axios";

const PatientInfo = ({id}) => {

    const [info, setInfo] = useState('')

    useEffect(() => {
        getInfoPatient()
    }, [id])

    const getInfoPatient = async () => {
        const response = await axios.get(`http://127.0.0.1:8000/api-patients/patient-detail/${id}/`)
        setInfo(response.data)
    }

    return (
        <div className="info-patient">
            <p>First Name: {info.first_name}</p>
            <p>Last Name: {info.last_name}</p>
            <p>Weight: {info.weight}</p>
            <p>Growth: {info.growth}</p>
        </div>
    );
};

export default PatientInfo;