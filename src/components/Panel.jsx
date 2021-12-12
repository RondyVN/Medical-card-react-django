import React, {useContext, useEffect, useState} from 'react';
import Search from "./LeftPanel/Search";
import MyButton from "./UI/button/MyButton";
import PatientList from "./LeftPanel/PatientList";
import LeftPanle from "./LeftPanel/LeftPanle";
import {useHistory} from "react-router-dom";
import {usePatient} from "../hooks/useSearch";
import {useFetch} from "../hooks/useFetch";
import PostService from "../API/PostService";
import RightPanel from "./RightPanel/RightPanel";
import {Patients} from "../context";

const Panel = ({children}) => {
    const route = useHistory()
    const {patients, setPatients} = useContext(Patients)
    const [filter, setFilter] = useState({query: ''})
    const getSearch = usePatient(patients, filter.query)
    const [fetchPosts, isPostsLoading, postError] = useFetch(async () => {
        const response = await PostService.getPatient()
        //route.push(`/patient/${response.data[0].id}`)
        //setPatient(response.data[0])
        setPatients(response.data)
    })

    useEffect(() => {
        fetchPosts()
    }, [])

    return (
        <div className="panels">
            {postError}
            <LeftPanle>
                <Search filter={filter} setFilter={setFilter}/>
                <MyButton onClick={() => route.push('/patient/create')}>
                    Create user
                </MyButton>
                {isPostsLoading
                    ? <div>Loading...</div>
                    : <PatientList patients={getSearch} />
                }
            </LeftPanle>
            <RightPanel>
                {children}
            </RightPanel>
        </div>
    );
};

export default Panel;