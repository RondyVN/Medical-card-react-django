import React, {useState} from 'react';
import {Patients} from "./index";

const PatientsContext = ({children}) => {
    const [patients, setPatients] = useState([])
    return (
        <Patients.Provider value={{
            patients, setPatients
        }}>
            {children}
        </Patients.Provider>
    );
};

export default PatientsContext;