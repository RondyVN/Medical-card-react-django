import React, {useEffect, useState} from 'react';
import {usePatient} from "../hooks/useSearch";
import {useFetch} from "../hooks/useFetch";
import PostService from "../API/PostService";
import Panel from "../components/Panel";
import LeftPanle from "../components/LeftPanel/LeftPanle";
import Search from "../components/LeftPanel/Search";
import MyButton from "../components/UI/button/MyButton";
import CreateForm from "../components/LeftPanel/CreateForm";
import MyModal from "../components/UI/MyModal/MyModal";
import PatientList from "../components/LeftPanel/PatientList";
import RightPanel from "../components/RightPanel/RightPanel";
import PatientInfo from "../components/RightPanel/PatientInfo";
import {useHistory, useParams} from "react-router-dom";


function MainPage() {
    const [edit, setEdit] = useState(false)
    const params = useParams()
    const router = useHistory()
    const [patients, setPatients] = useState([])
    const [filter, setFilter] = useState({query: ''})
    const [modal, setModal] = useState(false)
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
        setModal(false)
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
                    <div className="position-btn">
                        <MyButton onClick={() => setModal(true)}>
                            Create user
                        </MyButton>
                    </div>
                    <MyModal visible={modal} setVisible={setModal}>
                        <CreateForm create={createPatient}/>
                    </MyModal>
                    {isPostsLoading
                        ? <div>Loading...</div>
                        : <PatientList patients={getSearch} id={params.id}/>
                    }
                </LeftPanle>

                <RightPanel>
                    {!params.id
                        ? <div>Loading...</div>
                        : <PatientInfo edit={edit} id={params.id} setEdit={setEdit} deletePatient={deletePatient}
                                       updRightPanel={updPatient}/>
                    }
                </RightPanel>
            </Panel>
        </div>
    );
}

export default MainPage;