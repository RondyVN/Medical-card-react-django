import React, {useCallback, useContext, useEffect, useState} from 'react';
import Search from "./LeftPanel/Search";
import PatientList from "./LeftPanel/PatientList";
import LeftPanel from "./LeftPanel/LeftPanel";
import {usePatient} from "../hooks/useSearch";
import RightPanel from "./RightPanel/RightPanel";
import {Patients} from "../context";
import PatientGet from "../API/PatientGet";
import {useHistory} from "react-router-dom";

const Panel = ({children}) => {
    const history = useHistory()
    const {patients, setPatients} = useContext(Patients)
    const [filter, setFilter] = useState({query: ''})
    const getSearch = usePatient(patients, filter.query)

    useEffect( () => {
        async function getPatients(){
            const patients = await PatientGet.get()
            setPatients(patients.data)
        }
        getPatients()
    }, [history])

    return (
        <div className="panels">
            <LeftPanel>
                <Search filter={filter} setFilter={setFilter}/>
                <PatientList patients={getSearch}/>
            </LeftPanel>
            <RightPanel>
                {children}
            </RightPanel>
        </div>
    );
};

export default Panel;