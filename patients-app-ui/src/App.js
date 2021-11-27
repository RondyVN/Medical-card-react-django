import './styles/App.css'
import {useEffect, useState} from "react";
import PatientList from "./components/LeftPanel/PatientList";
import axios from "axios";
import MyButton from "./components/UI/button/MyButton";
import {usePosts} from "./hooks/useSearch"
import {useFetch} from "./hooks/useFetch"
import Search from "./components/LeftPanel/Search";
import MyModal from "./components/UI/MyModal/MyModal";
import CreateForm from "./components/LeftPanel/CreateForm";
import Panel from "./components/Panel";
import LeftPanle from "./components/LeftPanel/LeftPanle";
import RightPanel from "./components/RightPanel/RightPanel";
import PatientInfo from "./components/RightPanel/PatientInfo";

function App() {
    const [edit, setEdit] = useState(false)
    const [patients, setPatients] = useState([])
    const [filter, setFilter] = useState({query: ''})
    const [modal, setModal] = useState(false)
    const getSearch = usePosts(patients, filter.query)
    const [idPatient, setIdPatient] = useState('')
    const [enableDel, setEnableDel] = useState(false)
    const [fetchPosts, isPostsLoading, postError] = useFetch(async () => {
        const response = await axios.get('http://127.0.0.1:8000/api-patients/patient-list/')
        setPatients(response.data)
        const responseFirstId = await axios.get('http://127.0.0.1:8000/api-patients/patient-first/')
        setIdPatient(responseFirstId.data.id)
    })

    useEffect(() => {
        fetchPosts()
    }, [enableDel])

    const createPatient = (newPost) => {
        setPatients([newPost, ...patients])
        setModal(false)
    }

    const updPatient = (patient) => {
        setPatients([...patient])
    }

    const setId = (id) => {
        setIdPatient(id)
    }

    const deletePatient = async () => {
        await axios.delete(`http://127.0.0.1:8000/api-patients/patient-delete/${idPatient}/`)
        const responseFirstId = await axios.get('http://127.0.0.1:8000/api-patients/patient-first/')
        setEnableDel(true)
        setIdPatient(responseFirstId.id)
        setEdit(false)
        setEnableDel(false)
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
                        : <PatientList setId={setId} patients={getSearch}/>
                    }
                </LeftPanle>

                <RightPanel>
                    {!idPatient
                        ? <div>Loading...</div>
                        : <PatientInfo edit={edit} id={idPatient} setEdit={setEdit} deletePatient={deletePatient} updRightPanel={updPatient}/>
                    }
                </RightPanel>
            </Panel>
        </div>
    );
}

export default App;


