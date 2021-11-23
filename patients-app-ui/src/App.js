import './styles/App.css'
import {useEffect, useMemo, useState} from "react";
import PatientList from "./components/PatientList";
import axios from "axios";
import MyButton from "./components/UI/button/MyButton";
import {usePosts} from "./hooks/useSearch"
import Search from "./components/Search";
import MyModal from "./components/MyModal/MyModal";
import CreateForm from "./components/CreateForm";
import Panel from "./components/Panel";
import LeftPanle from "./components/LeftPanle";
import RightPanel from "./components/RightPanel";
import PatientInfo from "./components/PatientInfo";

function App() {

    const [patients, setPatients] = useState([])
    const [filter, setFilter] = useState({query: ''})
    const [modal, setModal] = useState(false)
    const getSearch = usePosts(patients, filter.query)
    const [idPatient, setIdPatient] = useState(19)

    useEffect(() => {
        getListsPatients()
    }, [])

    const getListsPatients = async () => {
        const response = await axios.get('http://127.0.0.1:8000/api-patients/patient-list/')
        setPatients(response.data)
    }

    const createPatient = (newPost) => {
        setPatients([...patients, newPost])
        setModal(false)
    }

    const setId = (id) => {
        setIdPatient(id)
    }


    return (
        <div className="App">
            <Panel>
                <LeftPanle>
                    <Search filter={filter} setFilter={setFilter}/>
                    <MyButton onClick={() => setModal(true)}>
                        Create user
                    </MyButton>
                    <MyModal visible={modal} setVisible={setModal}>
                        <CreateForm create={createPatient}/>
                    </MyModal>
                    <PatientList setId={setId} patients={getSearch}/>
                </LeftPanle>

                <RightPanel>
                    <div>{idPatient}</div>
                    <PatientInfo id={idPatient}/>
                </RightPanel>
            </Panel>
        </div>
    );
}

export default App;


