import './styles/App.css'

import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import {Patients} from "./context";
import React, {useState} from "react";
import Layout from "./components/Layout/Layout";
import PatientCreateForm from "./pages/PatientCreateForm";
import PatientEditForm from "./pages/PatientEditForm";
import PatientInfo from "./pages/PatientInfo";
import PostService from "./API/PostService";



function App() {
    const [patients, setPatients] = useState([])
    const [id, setId] = useState('')
    const getId = async () => {
        const response = await PostService.getFirstPatient()
        setId(`/patient/${response.data.id}`)
    }
    if (!id) {
        getId()
    }

    return (
            <Patients.Provider value={{
                patients, setPatients,
            }}>
                <BrowserRouter>
                    <div className="App">
                        <Layout>
                            <Switch>
                                <Route exact path="/patient">
                                    <PatientInfo/>
                                </Route>
                                <Route exact path="/patient/create">
                                    <PatientCreateForm/>
                                </Route>
                                <Route exact path="/patient/:id">
                                    <PatientInfo/>
                                </Route>
                                <Route exact path="/patient/:id/edit">
                                    <PatientEditForm/>
                                </Route>
                                <Route exact path="/">
                                    <Redirect to={id}/>
                                </Route>
                            </Switch>
                        </Layout>
                    </div>
                </BrowserRouter>
            </Patients.Provider>
    );
}

export default App;


