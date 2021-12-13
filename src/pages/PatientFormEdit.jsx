import MyButton from "../components/UI/button/MyButton";
import Header from "../components/RightPanel/Header";
import Form from "../components/Form";
import PostService from "../API/PostService";
import {useCallback, useContext, useEffect, useState} from "react";
import {Patients} from "../context";
import {useHistory, useParams} from "react-router-dom";
import Delete from "../components/UI/Delete/Delete";

const PatientFormEdit = () => {
    const {setPatients} = useContext(Patients)
    const history = useHistory()
    const id = useParams()
    const [patient, setPatient] = useState({first_name: '', last_name: '', date_birth: '', sex: '', state: '', country: '', address: ''})
    const getPatientInfo = useCallback(async () => {
        const response = await PostService.DetailPatient(id.id)
        setPatient(response.data)
    }, [id.id])

    useEffect(() => {
        getPatientInfo()
    }, [getPatientInfo])

    const savePatient = async () => {
        await PostService.UpdatePatient(patient)
        const postList = await PostService.getPatient()
        setPatients([...postList.data])
        history.push(`/patient/${patient.id}`)
    }

    return (
        <div>
            <Header>
                <span><MyButton onClick={savePatient}>Save</MyButton></span>
                <span><MyButton onClick={() => history.push(`/patient/${patient.id}`)}>Cancel</MyButton></span>
                <Delete/>
            </Header>
            <Form post={patient} setPost={setPatient} handler={savePatient} />
        </div>
    );
};

export default PatientFormEdit;