import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Patients} from "./context";
import PatientGet from "./API/PatientGet";

function Main() {
    const [id, setId] = useState('')
    const getId = async () => {
        const response = await PatientGet.getAll()
        setId(`/patient/${response.data[0].id}`)
    }
    if (!id) {
        getId()
    }
    const [patients, setPatients] = useState([])
    return (
        <Patients.Provider value={{
            patients, setPatients,
        }}>
            <App id={id}/>
        </Patients.Provider>
    )
}

ReactDOM.render(
    <Main />,
  document.getElementById('root')
);

