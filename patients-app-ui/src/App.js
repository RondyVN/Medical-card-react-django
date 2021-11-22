import './styles/App.css'
import {useEffect, useMemo, useState} from "react";
import PatientList from "./components/PatientList";
import axios from "axios";
import Input from "./components/UI/myinput/Input";
import MyButton from "./components/UI/button/MyButton";
import {usePosts} from "./hooks/useSearch"
import Search from "./components/Search";

function App() {

    const [patients, setPatients] = useState([])
    const [filter, setFilter] = useState({query: ''})
    const getSearch = usePosts(patients, filter.query)

    useEffect(() => {
        getListsPatients()
    }, [])

    const getListsPatients = async () => {
        const response = await axios.get('http://127.0.0.1:8000/api-patients/patient-list/')
        setPatients(response.data)
    }



    return (
        <div className="App">
            <div className="panels">
                <div className="left-panel">
                    <Search filter={filter} setFilter={setFilter}/>
                    <MyButton>Click</MyButton>
                    <PatientList patients={getSearch}/>
                </div>
                <div className="right-pane">
                </div>
            </div>
        </div>
    );
}

export default App;


