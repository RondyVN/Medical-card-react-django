import './styles/App.css'
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import React from "react";
import Layout from "./components/Layout/Layout";
import PatientCreateForm from "./pages/PatientCreateForm";
import PatientEditForm from "./pages/PatientEditForm";
import PatientInfo from "./pages/PatientInfo";


function App({id}) {
    return (
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
    );
}

export default App;


