import './styles/App.css'

import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import MainPage from "./pages/MainPage";
import {CreateEnable} from "./context";
import React, {useState} from "react";
import Panel from "./components/Panel";
import CreateForm from "./pages/CreateForm";


function App() {
    const [createEnable, setCreateEnable] = useState(false)
    const [patients, setPatients] = useState([])

    return (
        <CreateEnable.Provider value={{
            createEnable,
            setCreateEnable,
            patients,
            setPatients
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
                                <MainPage/>
                            </Route>
                            <Redirect to="/patient/42"/>
                        </Switch>
                    </Panel>
                </div>
            </BrowserRouter>
        </CreateEnable.Provider>
    );
}

export default App;


