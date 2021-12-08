import './styles/App.css'

import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import MainPage from "./pages/MainPage";
import PatientInfo from "./components/RightPanel/PatientInfo";

function App() {

    return (
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
    );
}

export default App;


