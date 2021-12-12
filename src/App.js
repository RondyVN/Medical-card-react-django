import './styles/App.css'

import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import MainPage from "./pages/MainPage";
import {Patients} from "./context";
import React, {useState} from "react";
import Panel from "./components/Panel";
import CreateForm from "./pages/CreateForm";
import PatientFormEdit from "./pages/PatientFormEdit";


function App() {
    const [patients, setPatients] = useState([])
    const [patient, setPatient] = useState({})
    const asd = patient
    console.log(patient)

    return (
        <Patients.Provider value={{
            patients, setPatients,
            patient, setPatient
        }}>
            <BrowserRouter>
                <div className="App">
                    <Panel>
                        <Switch>
                            <Route exact path="/patient">
                                <MainPage/>
                            </Route>
                            <Route exact path="/patient/create">
                                <CreateForm/>
                            </Route>
                            <Route exact path="/patient/:id">
                                <MainPage/>
                            </Route>
                            <Route exact path="/patient/:id/edit">
                                <PatientFormEdit/>
                            </Route>
                            <Redirect to="/patient"/>
                        </Switch>
                    </Panel>
                </div>
            </BrowserRouter>
        </Patients.Provider>
    );
}

export default App;


