import React, {useContext, useEffect, useState} from 'react';
import Search from "../Headers/LeftHeader";
import PatientList from "./PatientList";
import LeftPanel from "../LeftPanel/LeftPanel";
import {usePatient} from "../../hooks/useSearch";
import RightPanel from "../RightPanel/RightPanel";
import {Patients} from "../../context";
import PatientGet from "../../API/PatientGet";
import {useFetch} from "../../hooks/useFetch";

const Layout = ({children}) => {
    //const history = useHistory()
    const {patients, setPatients} = useContext(Patients)
    const [filter, setFilter] = useState({query: ''})
    const getSearch = usePatient(patients, filter.query)
    //console.log(patients)
    const [getPatients, error] = useFetch(async () => {
        const patients = await PatientGet.getAll()
        //setFirstId(patients.data[0].id)
        setPatients(patients.data)
    })

    useEffect(() => {
        getPatients()
    }, [])

    return (
        <div className="panels">
            <LeftPanel>
                <Search filter={filter} setFilter={setFilter}/>
                <PatientList patients={getSearch} /*firstId={firstId}*//>
            </LeftPanel>
            <RightPanel>
                {children}
            </RightPanel>
        </div>
    );
};

export default Layout;