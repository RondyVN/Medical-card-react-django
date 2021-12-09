import './styles/App.css'

import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import MainPage from "./pages/MainPage";
import {CreateEnable} from "./context";
import {useState} from "react";


function App() {
    const [createEnable, setCreateEnable] = useState(false)
    return (
        <CreateEnable.Provider value={{
            createEnable,
            setCreateEnable
        }}>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/patient">
                        <MainPage/>
                    </Route>
                    <Route path="/patient/:id">
                        <MainPage/>
                    </Route>
                    <Redirect to="/patient"/>
                </Switch>
            </BrowserRouter>
        </CreateEnable.Provider>
    );
}

export default App;


