import React, {useContext, useEffect, useState} from 'react';
import {usePatient} from "../hooks/useSearch";
import {useFetch} from "../hooks/useFetch";
import PostService from "../API/PostService";
import Panel from "../components/Panel";
import LeftPanle from "../components/LeftPanel/LeftPanle";
import Search from "../components/LeftPanel/Search";
import MyButton from "../components/UI/button/MyButton";
import CreateForm from "../components/RightPanel/CreateForm";
import MyModal from "../components/UI/MyModal/MyModal";
import PatientList from "../components/LeftPanel/PatientList";
import RightPanel from "../components/RightPanel/RightPanel";
import PatientInfo from "../components/RightPanel/PatientInfo";
import {useHistory, useParams} from "react-router-dom";
import {CreateEnable} from "../context";


function MainPage() {
    const {setCreateEnable} = useContext(CreateEnable)
    const params = useParams();
    const router = useHistory()
    const [patients, setPatients] = useState([])
    const [filter, setFilter] = useState({query: ''})
    const getSearch = usePatient(patients, filter.query)
    const [enableDel, setEnableDel] = useState(false)
    const [fetchPosts, isPostsLoading, postError] = useFetch(async () => {
        const response = await PostService.getPatient()
        setPatients(response.data)
        const responseFirstId = await PostService.getFirstPatient()
        router.push(`/patient/${responseFirstId.data.id}`)
        setEnableDel(false)
    })

    useEffect(() => {
        fetchPosts()
    }, [enableDel])

    const createPatient = async (newPost) => {
        setPatients([newPost, ...patients])
        router.push(`/patient/${newPost.id}`)
    }

    const updPatient = (patient) => {
        setPatients([...patient])
    }

    const deletePatient = async () => {
        await PostService.DeletePatient(params.id)
        setEnableDel(true)
    }

    return (
        <div className="App">
            {postError}
            <Panel>
                <LeftPanle>
                    <Search filter={filter} setFilter={setFilter}/>
                    <MyButton onClick={() => setCreateEnable(true)}>
                        Create user
                    </MyButton>
                    {isPostsLoading
                        ? <div>Loading...</div>
                        : <PatientList patients={getSearch} id={params.id}/>
                    }
                </LeftPanle>

                <RightPanel>
                    {!params.id
                        ? <div>Loading...</div>
                        : <PatientInfo id={params.id} deletePatient={deletePatient}
                                       updRightPanel={updPatient} create={createPatient}
                        />
                    }
                </RightPanel>
            </Panel>
        </div>
    );
}

export default MainPage;