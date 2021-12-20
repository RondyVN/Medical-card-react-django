import React, { useContext, useEffect, useState} from 'react';
import Search from "../LeftPanel/Search";
import PatientList from "../LeftPanel/PatientList";
import LeftPanel from "../LeftPanel/LeftPanel";
import {usePatient} from "../../hooks/useSearch";
import RightPanel from "../RightPanel/RightPanel";
import {Patients} from "../../context";
import PatientGet from "../../API/PatientGet";
import {useHistory} from "react-router-dom";
import {useFetch} from "../../hooks/useFetch";

const Layout = ({children}) => {
    const history = useHistory()
    const {patients, setPatients} = useContext(Patients)
    const [filter, setFilter] = useState({query: ''})
    const getSearch = usePatient(patients, filter.query)
    //const [firstId, setFirstId] = useState(0)

    const [getPatients, isLoading, error] = useFetch(async () => {
        const patients = await PatientGet.getAll()
        //setFirstId(patients.data[0].id)
        setPatients(patients.data)
    })

    useEffect( () => {
        getPatients()
    }, [history])

    return (
        <div className="panels">
            <LeftPanel>
                <Search filter={filter} setFilter={setFilter}/>
                {isLoading
                    ? <div>Loading...</div>
                    : <PatientList patients={getSearch} /*firstId={firstId}*//>
                }
            </LeftPanel>
            <RightPanel>
                {children}
            </RightPanel>
        </div>
    );
};

export default Layout;