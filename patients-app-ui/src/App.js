import './styles/App.css'
import {useEffect, useState} from "react";
import PatientList from "./components/LeftPanel/PatientList";
import MyButton from "./components/UI/button/MyButton";
import {usePatient} from "./hooks/useSearch"
import {useFetch} from "./hooks/useFetch"
import Search from "./components/LeftPanel/Search";
import MyModal from "./components/UI/MyModal/MyModal";
import CreateForm from "./components/LeftPanel/CreateForm";
import Panel from "./components/Panel";
import LeftPanle from "./components/LeftPanel/LeftPanle";
import RightPanel from "./components/RightPanel/RightPanel";
import PatientInfo from "./components/RightPanel/PatientInfo";
import PostService from "./API/PostService";

function App() {
    const [edit, setEdit] = useState(false)                 // Status for the Edit button that changes the right panel to the patient edit panel
    const [patients, setPatients] = useState([])            // List of all patients
    const [filter, setFilter] = useState({query: ''})       // State for Patient search filter
    const [modal, setModal] = useState(false)               // State for open/closed Modal window
    const getSearch = usePatient(patients, filter.query)                // Get a list of found patients
    const [idPatient, setIdPatient] = useState('')          // State for id patient
    const [enableDel, setEnableDel] = useState(false)                       // State which Lets you know when to delete a user
    const [fetchPosts, isPostsLoading, postError] = useFetch(async () => {      // Custom hook for error handling and page loading
        const response = await PostService.getPatient()
        setPatients(response.data)
        const responseFirstId = await PostService.getFirstPatient()
        setIdPatient(responseFirstId.data.id)
        setEnableDel(false)
    })

    useEffect(() => {
        fetchPosts()
    }, [enableDel])

    const createPatient = async (newPost) => {
        setPatients([newPost, ...patients])
        setIdPatient(newPost.id)
        setModal(false)
    }

    const updPatient = (patient) => {
        setPatients([...patient])
    }

    const setId = (id) => {
        setIdPatient(id)
    }

    const deletePatient = async () => {
        await PostService.DeletePatient(idPatient)
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


