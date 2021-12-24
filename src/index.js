import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import PatientGet from "./API/PatientGet";
import PatientsContext from "./context/PatientsContext";

function Main() {
    const [id, setId] = useState('')
    const getId = async () => {
        const response = await PatientGet.getAll()
        setId(`/patient/${response.data[0].id}`)
    }
    if (!id) {
        getId()
    }
    return (
        <PatientsContext>
            <App id={id}/>
        </PatientsContext>
    )
}

ReactDOM.render(
    <Main />,
  document.getElementById('root')
);

